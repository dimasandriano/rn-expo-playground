import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ImageBG from '@/assets/images/main-page-bg.png';
import Logo from '@/assets/images/WinnerLogo.png';
import { Image } from '@/components/ui/image';
import { MoonIcon } from '@/components/ui/icon';

export default function Screen() {
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground source={ImageBG} className="flex-1">
        <VStack className="p-3 justify-between py-10 flex-1">
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
              className="bg-orange-500 data-[hover=true]:bg-orange-600 data-[active=true]:bg-orange-700 rounded-2xl"
            >
              <ButtonText>Mulai</ButtonText>
            </Button>
            <Text className="text-center">Daftar dan masuk sekarang!</Text>
          </VStack>
        </VStack>
      </ImageBackground>
    </SafeAreaView>
  );
}
