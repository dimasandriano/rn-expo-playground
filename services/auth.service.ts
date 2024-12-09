import { instance } from '@/lib/axios/instance';
import { TAPIResponse } from '@/types/api.type';
import { TResponseAuthLogin } from '@/types/response.type';

export const authService = {
  authLogin: (data: {
    phone_number: string;
    password: string;
  }): Promise<TAPIResponse<TResponseAuthLogin>> => {
    return instance.post('/microsite/auth/login/password', data);
  },
};
