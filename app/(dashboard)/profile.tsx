import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from '@/components/ui/avatar';
import { Box } from '@/components/ui/box';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { LinearGradient } from '@/components/ui/linear-gradient';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { userService } from '@/services/user.service';
import { useQuery } from '@tanstack/react-query';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space="lg">
          <HStack space="md" className="items-center">
            <Avatar size="lg">
              <AvatarFallbackText>Jane Doe</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                }}
              />
              <AvatarBadge />
            </Avatar>
            <VStack>
              <Text bold size="xl">
                Haewon
              </Text>
              <Text size="sm">Aktif Sampai 13 Oktober 2024</Text>
              <Text size="sm">Umum</Text>
            </VStack>
          </HStack>
          <Box className="rounded-lg bg-white p-3">
            <HStack className="items-center justify-between" space="sm">
              <VStack className="flex-1">
                <Heading>33</Heading>
                <Text>Riwayat kunjungan Bulan ini</Text>
              </VStack>
              <Divider orientation="vertical" />
              <VStack className="flex-1">
                <Heading>33</Heading>
                <Text>Sisa Masa Aktif</Text>
              </VStack>
              <Divider orientation="vertical" />
              <VStack className="flex-1">
                <Heading>Aktif</Heading>
                <Text>Status</Text>
              </VStack>
            </HStack>
          </Box>
          <VStack space="xs">
            <Heading>E-Card</Heading>
          </VStack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
