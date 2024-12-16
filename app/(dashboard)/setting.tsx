import {
  Accordion,
  AccordionContent,
  AccordionContentText,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from '@/components/ui/avatar';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import useAuth from '@/hooks/useAuth';
import { userService } from '@/services/user.service';
import { setStorage } from '@/utils/storage';
import { useQuery } from '@tanstack/react-query';
import { router } from 'expo-router';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react-native';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space="lg">
          <Button
            onPress={async () => {
              await setStorage('token', '');
              router.replace('/(auth)/login');
            }}
          >
            <ButtonText>Logout</ButtonText>
          </Button>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
