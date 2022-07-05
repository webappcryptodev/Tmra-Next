import { createClient, fetchExchange, makeOperation, Provider } from 'urql';
import config from '@configuration';
import { useAppSelector } from '@redux/hooks';
import React, { ReactNode } from 'react';
import { app } from '@redux/slices/auth/realm';
import { decode, JwtPayload } from 'jsonwebtoken';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { authExchange } from '@urql/exchange-auth';
import * as Realm from 'realm-web';
dayjs.extend(duration);

// Implements Authentication Exchange: https://formidable.com/open-source/urql/docs/api/auth-exchange/

const realmAuthExchange = authExchange<{ realmAccessToken?: string }>({
  getAuth: async ({ authState }) => {
    // for initial launch, check Realm app, and if it's not logged in, get anonymous token (for querying public data)
    if (!authState) {
      if (!app.currentUser || !app.currentUser?.accessToken) {
        await app.logIn(Realm.Credentials.anonymous());
        return { realmAccessToken: app.currentUser!.accessToken! };
      }
    }

    if (!app.currentUser) {
      await app.logIn(Realm.Credentials.anonymous());
    }

    // if (typeof window !== 'undefined' ?? localStorage.getItem('token')) {
    console.debug(
      'Refreshing Realm token for Realm user %s %s...',
      app.currentUser?.providerType,
      app.currentUser?.id,
    );
    await app.currentUser!.refreshAccessToken();
    console.debug(
      'Refreshed Realm token for Realm user %s %s',
      app.currentUser?.providerType,
      app.currentUser?.id,
    );
    // }
    return { realmAccessToken: app.currentUser!.accessToken! };
  },
  addAuthToOperation: ({ authState, operation }) => {
    if (!authState?.realmAccessToken) {
      console.error('Trying to query GraphQL without access token');
      return operation;
    }

    const decoded = decode(authState.realmAccessToken) as JwtPayload;
    if (typeof decoded === 'object' && decoded.exp) {
      const expiresInSeconds = dayjs.unix(decoded.exp).diff(dayjs(), 'second');
      if (expiresInSeconds < 1) {
        console.info(
          'Querying GraphQL using Realm token exp=%s (%s) will expire in %d seconds, GraphQL operation will fail!',
          decoded.exp,
          dayjs.unix(decoded.exp).toISOString(),
          expiresInSeconds,
        );
      } else {
        console.debug(
          'Querying GraphQL using Realm token exp=%s (%s) (expires in %d seconds)',
          decoded.exp,
          dayjs.unix(decoded.exp).toISOString(),
          expiresInSeconds,
        );
      }
    } else {
      console.error('Invalid Realm token: %s', authState.realmAccessToken);
    }

    // fetchOptions can be a function (See Client API) but you can simplify this based on usage
    const fetchOptions =
      typeof operation.context.fetchOptions === 'function'
        ? operation.context.fetchOptions()
        : operation.context.fetchOptions || {};
    return makeOperation(operation.kind, operation, {
      ...operation.context,
      fetchOptions: {
        ...fetchOptions,
        headers: {
          ...fetchOptions.headers,
          Authorization: `Bearer ${authState.realmAccessToken}`,
        },
      },
    });
  },
  willAuthError: ({ authState }) => {
    if (authState?.realmAccessToken) {
      const decoded = decode(authState.realmAccessToken) as JwtPayload;
      if (typeof decoded === 'object' && decoded.exp) {
        const expiresInSeconds = dayjs.unix(decoded.exp).diff(dayjs(), 'second');
        // console.debug(
        //   'Realm token exp=%s (%s) (expires in %d seconds)',
        //   decoded.exp,
        //   dayjs.unix(decoded.exp).toISOString(),
        //   expiresInSeconds,
        // );
        if (expiresInSeconds < 30) {
          console.info(
            'Realm token will expire in %d seconds, refreshing GraphQL access token after this...',
            expiresInSeconds,
          );
          return true;
        }
        return false;
      } else {
        console.error('Invalid Realm token: %s', authState.realmAccessToken);
        return true;
      }
    } else {
      console.error('Realm token not provided, GraphQL auth will fail');
      return true;
    }
  },
});

export const client = createClient({
  url: config.realm.graphqlUrl,
  exchanges: [realmAuthExchange, fetchExchange],
});

export function RealmUrqlProvider({ children }: { children: ReactNode }) {
  return <Provider value={client}>{children}</Provider>;
}
