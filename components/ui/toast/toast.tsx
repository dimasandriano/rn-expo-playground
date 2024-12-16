import React from 'react';
import {
  Toast,
  ToastDescription,
  toastStyle,
  ToastTitle,
  useToast,
} from '@/components/ui/toast';
import { ToastPlacement } from '@gluestack-ui/toast/lib/types';
import { VariantProps } from '@gluestack-ui/nativewind-utils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  title: string;
  desc: string;
  placement?: ToastPlacement;
  duration?: number;
} & Partial<VariantProps<typeof toastStyle>>;

export default function useToastify() {
  const toast = useToast();
  const [toastId, setToastId] = React.useState(0);
  const insets = useSafeAreaInsets();
  console.log(toastId);

  const showToast = (props: Props) => {
    if (toast.isActive(toastId?.toString())) {
      return;
    }
    const newId = Math.random();
    setToastId(newId);
    toast.show({
      id: newId?.toString(),
      placement: props.placement || 'top',
      duration: props.duration || 3000,
      render: ({ id }) => {
        const uniqueToastId = 'toast-' + id;
        return (
          <Toast
            nativeID={uniqueToastId}
            action={props.action || 'muted'}
            variant={props.variant || 'solid'}
            style={{
              marginTop: insets.top,
            }}
          >
            <ToastTitle>{props.title}</ToastTitle>
            <ToastDescription>{props.desc}</ToastDescription>
          </Toast>
        );
      },
    });
  };
  return { showToast };
}
