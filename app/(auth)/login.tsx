import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import Logo from '@/assets/images/WinnerLogo.png';
import { Image } from '@/components/ui/image';
import { Controller, useForm } from 'react-hook-form';
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Button, ButtonText } from '@/components/ui/button';
import React from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import { Heading } from '@/components/ui/heading';
import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services/auth.service';
import { router } from 'expo-router';
import { setStorage } from '@/utils/storage';
import useAuth from '@/hooks/useAuth';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Screen() {
  const { setLogin } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<{
    phone_number: string;
    password: string;
  }>({
    defaultValues: {
      phone_number: '',
      password: '',
    },
  });

  const { mutate: mutateLogin, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: { phone_number: string; password: string }) =>
      authService.authLogin(data),
    onSuccess: ({ data }) => {
      setStorage('token', data.token);
      setLogin(!!data.token);
      reset();
      router.replace('/(dashboard)');
    },
    onError: (error) => {
      console.log('error', error.message);
    },
  });
  const onSubmit = () => {
    console.log({ payload: getValues() });
    mutateLogin({
      ...getValues(),
      phone_number: `62${getValues().phone_number}`,
    });
  };
  const [showPassword, setShowPassword] = React.useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  return (
    <VStack className="h-[92vh] justify-between">
      <VStack />
      <VStack space="md">
        <Image
          source={Logo}
          size="xl"
          className="self-center"
          alt="Winner Logo"
        />
        <VStack space="sm">
          <FormControl isRequired isInvalid={'phone_number' in errors}>
            <FormControlLabel>
              <FormControlLabelText>No Hp</FormControlLabelText>
            </FormControlLabel>
            <Controller
              control={control}
              render={({ field }) => (
                <Input size="2xl">
                  <InputSlot className="pl-3">
                    <Text>+62</Text>
                  </InputSlot>
                  <InputField
                    {...field}
                    size="xs"
                    className="text-base"
                    onBlur={field.onBlur}
                    value={field.value}
                    onChange={(e) => field.onChange(e.nativeEvent.text)}
                    placeholder="No Hp"
                    keyboardType="phone-pad"
                  />
                </Input>
              )}
              name="phone_number"
              rules={{ required: 'No Hp wajib diisi' }}
            />
            <FormControlError>
              <FormControlErrorText>
                {errors.phone_number?.message as string}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <FormControl isRequired isInvalid={'password' in errors}>
            <FormControlLabel>
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Controller
              control={control}
              render={({ field }) => (
                <Input size="2xl">
                  <InputField
                    {...field}
                    size="xs"
                    className="text-base"
                    onBlur={field.onBlur}
                    value={field.value}
                    onChange={(e) => field.onChange(e.nativeEvent.text)}
                    placeholder="Password"
                    type={showPassword ? 'text' : 'password'}
                  />
                  <InputSlot className="pr-3" onPress={handleState}>
                    <InputIcon
                      size="xs"
                      as={showPassword ? EyeIcon : EyeOffIcon}
                    />
                  </InputSlot>
                </Input>
              )}
              name="password"
              rules={{ required: 'Password wajib diisi' }}
            />
            <FormControlError>
              <FormControlErrorText>
                {errors.password?.message as string}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        </VStack>
        <Heading size="sm" className="text-right text-orange-500">
          Lupa Password?
        </Heading>
        <Button
          size="lg"
          variant="solid"
          action="orange"
          disabled={isPending}
          onPress={handleSubmit(onSubmit)}
        >
          <ButtonText>Masuk</ButtonText>
        </Button>
        <Text className="text-center">Atau Masuk dengan Kode OTP</Text>
        <Button size="lg" variant="outline">
          <ButtonText>Login dengan Kode OTP</ButtonText>
        </Button>
        <Text className="text-center" bold>
          Belum punya akun member?{' '}
          <Text className="text-orange-500">Daftar!</Text>
        </Text>
      </VStack>
      <Text className="text-center italic">
        Selamat datang di Winner Gym, silahkan masukkan akun anda
      </Text>
    </VStack>
  );
}
