import configuration from '@configuration';
import FusionAuthClient, { LoginResponse } from '@fusionauth/typescript-client';
import { AppDispatch } from '@redux/store';
import { createSlice } from '@reduxjs/toolkit';
import * as Realm from 'realm-web';
// import { NavigateFunction } from "react-router";
import {
  signedIn as currentUserSignedIn,
  signedOut as currentUserSignedOut,
} from '../currentUser/currentUserSlice';
import { app } from './realm';
import { setCookies, removeCookies } from 'cookies-next';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: true,
    token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
    refreshToken: null as string | null,
  },
  reducers: {
    readAuthFromLocalStorage(state, action) {
      console.debug('authSlice.readFromLocalStorage');
      return {
        loading: false,
        token: localStorage.getItem('token'),
        refreshToken: localStorage.getItem('refreshToken'),
      };
    },
    signedIn(state, action) {
      console.debug('authSlice.signedIn', action.payload);
      state.loading = false;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    signedOut(state, action) {
      console.debug('authSlice.signedOut');
      state.loading = false;
      state.token = localStorage.getItem('token');
      state.refreshToken = localStorage.getItem('refreshToken');
    },
  },
});

export const { readAuthFromLocalStorage, signedIn, signedOut } = authSlice.actions;

async function signInToFusionAuth(email: string, password: string): Promise<LoginResponse> {
  console.debug('Signing in to FusionAuth %s...', email);
  const fusionAuth = new FusionAuthClient(
    configuration.fusionauth.clientKey,
    configuration.fusionauth.url,
    configuration.fusionauth.tenantId,
  );
  try {
    const loginRes = await fusionAuth.login({
      applicationId: configuration.fusionauth.appId,
      loginId: email,
      password: password,
    });
    console.log(
      'Signed in:',
      loginRes.statusCode,
      loginRes.response.user,
      loginRes.response.token,
      loginRes.response.refreshToken,
    );
    if (loginRes.statusCode === 212) {
      throw new Error(`Cannot sign in ${email} - FusionAuth Error Please verify your email first`);
    } else {
      localStorage.setItem('token', loginRes.response.token!);
      localStorage.setItem('refreshToken', loginRes.response.refreshToken!);
      localStorage.setItem('currentUser', JSON.stringify(loginRes.response.user!));
      const cookieData = {
        id: loginRes.response.user!.id,
        email: loginRes.response.user!.email,
        firstName: loginRes.response.user!.firstName,
        lastName: loginRes.response.user!.lastName,
      };
      console.log(publicRuntimeConfig.cookie);
      setCookies('userInfo', JSON.stringify(cookieData), {
        domain: publicRuntimeConfig.cookie,
        expires: new Date(2147483647 * 1000),
      });
      return loginRes.response;
    }
  } catch (err) {
    console.error('Cannot sign in to FusionAuth', email, err);
    if ((err as any).statusCode) {
      if ((err as any).statusCode == '404') {
        throw new Error(`Cannot sign in ${email} - User not found or the password incorrect`);
      } else {
        throw new Error(`Cannot sign in ${email} - FusionAuth Error ${err}`);
      }
    } else {
      throw new Error(`Cannot sign in ${email} - FusionAuth Error ${err}`);
    }
  }
}

export async function signInToRealm(userId: string, token: string) {
  console.debug('Signing in to Realm as %s...', userId);
  try {
    const res = await app.logIn(Realm.Credentials.jwt(token));
    if (!res.isLoggedIn) {
      throw new Error(`Unknown error: Realm.logIn as ${userId} successful but still not logged in`);
    }
    console.debug('Signed in to Realm as %s. Realm _id: %s', userId, app.currentUser!.id);
    return res;
  } catch (err) {
    console.error('Cannot sign in to Realm', userId, err);
    throw new Error(`Cannot sign in ${userId} - Realm Error ${err}`);
  }
}

export async function signIn(
  email: string,
  password: string,
  dispatch: AppDispatch,
): Promise<LoginResponse> {
  const res = await signInToFusionAuth(email, password);
  // navigate('/dashboard/app', {});

  try {
    const realmRes = await signInToRealm(res.user!.id!, res.token!);
    dispatch(signedIn({ token: res.token!, refreshToken: res.refreshToken! }));
    dispatch(currentUserSignedIn(res.user!));

    console.log('signIn fusionauth yyyyyyyyyyy', res);
    return res;
  } catch (err) {
    console.log('error !!!');
    // Cleanup before rethrow
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('currentUser');
    removeCookies('userInfo', {
      domain: publicRuntimeConfig.cookie,
      expires: new Date(0),
    });
    throw err;
  }
}

export async function startSignOut(
  refreshToken: string | null,
  dispatch: AppDispatch,
  navigate: (url: string) => void,
) {
  console.info('Signing out...');
  const fusionAuth = new FusionAuthClient(
    configuration.fusionauth.clientKey,
    configuration.fusionauth.url,
    configuration.fusionauth.tenantId,
  );
  if (refreshToken) {
    await fusionAuth.logout(true, refreshToken);
  }
  await app.currentUser?.logOut();
  await app.logIn(Realm.Credentials.anonymous());
  removeCookies('userInfo', {
    domain: publicRuntimeConfig.cookie,
    expires: new Date(0),
  });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('singlePayment');
  dispatch(currentUserSignedOut({}));
  dispatch(signedOut({}));
  navigate('/');
}

export default authSlice.reducer;
