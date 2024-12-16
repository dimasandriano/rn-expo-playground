import { getStorage, setStorage } from '@/utils/storage';
import axios from 'axios';
import { router } from 'expo-router';

export const instance = axios.create({
  baseURL: 'https://dev-api.winnergymblitar.com/api/v1',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
instance.interceptors.request.use(
  async function (config) {
    // Do something before request is sent
    const token = await getStorage('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log({ config });
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // if (error.response.data.code === 401) {
    //   await setStorage('token', '');
    //   router.replace('/(auth)/login');
    // }
    // Do something with response error
    return Promise.reject(error);
  }
);
