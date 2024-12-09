import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ImageBG from '@/assets/images/main-page-bg.png';
import Logo from '@/assets/images/WinnerLogo.png';
import { Image } from '@/components/ui/image';
import { router } from 'expo-router';

export default function Screen() {
  return (
    <ImageBackground source={ImageBG} className="flex-1">
      <SafeAreaView className="flex-1">
        <VStack className="flex-1 justify-between p-3 py-10">
          <VStack space="sm" className="h-1/2 justify-center">
            <Image
              source={Logo}
              size="xl"
              className="self-center"
              alt="Winner Logo"
            />
            <Heading size="3xl" className="text-center text-orange-500" bold>
              The Healthy Way of Life
            </Heading>
          </VStack>
          <VStack space="sm">
            <Button
              size="lg"
              action="orange"
              onPress={() => router.push('/login')}
            >
              <ButtonText>Mulai</ButtonText>
            </Button>
            <Text className="text-center">Daftar dan masuk sekarang!</Text>
          </VStack>
        </VStack>
      </SafeAreaView>
    </ImageBackground>
  );
}
