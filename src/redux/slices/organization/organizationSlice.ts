import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '@redux/hooks';

import axios from 'axios';
import getConfig from 'next/config';
import RuntimeConfigs from '@utils/runtime-configs';
import generateErrorMessage from '@utils/errorMessage';

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

const initialState = {
  organizationData: {} as any,
  isLoading: false,
  isError: false,
  errorMessage: null,
};

const organizationSlice = createSlice({
  name: 'organization',
  initialState,
  reducers: {
    setOrganizationData: (state, action) => {
      state.organizationData = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = true;
      state.errorMessage = action.payload;
    },
    resetError: state => {
      state.isError = false;
      state.errorMessage = null;
    },
  },
});

export const { setOrganizationData, setLoading, setError, resetError } = organizationSlice.actions;

export default organizationSlice.reducer;

export function getOrganizationData(orgId: string) {
  return async () => {
    dispatch(organizationSlice.actions.setLoading(true));
    try {
      const { data } = await axios.get(`${publicRuntimeConfig.tmra.raise.url}/orgs/${orgId}`);
      if (data.organization) {
        dispatch(organizationSlice.actions.setOrganizationData(data.organization));
      }
    } catch (error) {
      dispatch(organizationSlice.actions.setError(generateErrorMessage(error)));
      console.error(error);
    } finally {
      dispatch(organizationSlice.actions.setLoading(false));
    }
  };
}
