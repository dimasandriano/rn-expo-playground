import { instance } from '@/lib/axios/instance';

export const userService = {
  getSelf: () => instance.get('/user/self'),
};
