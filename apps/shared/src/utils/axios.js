import axios from 'axios';
import { makeApiRequest } from './api';

const INSTANCE = axios.create();

const createAxiosResponseInterceptor = () => {
  INSTANCE.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (
        error?.response?.data?.body?.type === 'invalid_token' ||
        error?.response?.data?.body?.type === 'invalid_auth_refresh_token' ||
        error?.response?.data?.body?.type === 'unauthorized_request'
      ) {
        makeApiRequest({ key: 'oauthRefresh' })
          .then((response) => {
            if (
              response?.data?.body?.type === 'invalid_token' ||
              response?.data?.body?.type === 'invalid_auth_refresh_token' ||
              response?.data?.body?.type === 'unauthorized_request'
            ) {
              sessionStorage.clear();
              window.location.href = '/login';
              return Promise.reject(error);
            } else return axios(error.response.config);
          })
          .catch((error1) => {
            sessionStorage.clear();
            window.location.href = '/login';
            return Promise.reject(error1);
          })
          .finally(createAxiosResponseInterceptor);
      }
    }
  );
};

createAxiosResponseInterceptor();

export default INSTANCE;
