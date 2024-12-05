import { instance } from '@/lib/axios/instance';

export const authService = {
  authLogin: (data: { phone_number: string; password: string }) => {
    return instance.post('/microsite/auth/login/password', data);
  },
};
