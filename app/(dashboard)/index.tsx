import { Button, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import useAuth from '@/hooks/useAuth';
import { View } from 'react-native';

export default function Screen() {
  const { logout } = useAuth();
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Dashboard</Text>
      <Button
        onPress={async () => {
          logout();
        }}
      >
        <ButtonText>Logout</ButtonText>
      </Button>
    </View>
  );
}
