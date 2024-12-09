import { getStorage, setStorage } from '@/utils/storage';
import { router } from 'expo-router';
import React, { useState } from 'react';

export default function useAuth() {
  const [isLogin, setIsLogin] = useState(false);

  async function checkLogin() {
    const token = await getStorage('token');
    setIsLogin(!!token);
  }
  async function logout() {
    await setStorage('token', '');
    setIsLogin(false);
    router.replace('/(auth)/login');
  }
  React.useEffect(() => {
    checkLogin();
  });
  return {
    isLogin,
    logout,
    setLogin: setIsLogin,
  };
}
