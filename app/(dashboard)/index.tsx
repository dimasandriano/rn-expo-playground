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
  const { logout } = useAuth();
  const FAQ = [
    {
      title: 'Saya member lama, apakah perlu daftar ulang?',
      desc: 'Jika membership sudah expired maka membership harus diperpanjang. Silahkan menuju admin untuk melakukan perpanjangan membership.',
    },
    {
      title: 'Berapakah biaya pendaftarannya?',
      desc: 'Biaya pendaftaran membership tergantung pada jenis membership dan tipe yang dipilih (Insidental / Bulanan / Tahunan).',
    },
    {
      title: 'Bagaimana cara melakukan perpanjangan membership?',
      desc: 'Silahkan melakukan perpanjangan dengan datang ke admin atau operator dan melakukan pembayaran sesuai biaya perpanjangan.',
    },
    {
      title: 'Berapa tarif biaya untuk personal trainer?',
      desc: 'Silahkan datang dan tanya ke operator.',
    },
  ];
  const { data } = useQuery({
    queryKey: ['/user/self'],
    queryFn: () => userService.getSelf(),
  });
  console.log({ data });
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
              <Text size="xl">
                Welcome,{' '}
                <Text bold size="xl">
                  Haewon!
                </Text>
              </Text>
              <Text size="sm">Check-in terakhir 13 September 2024</Text>
            </VStack>
          </HStack>
          <Box className="rounded-lg bg-orange-400 p-5">
            <VStack space="sm">
              <Heading className="text-white" size="2xl">
                WINNER GYM
              </Heading>
              <Text className="text-white">
                Winner Gymnasium menyediakan fasilitas alat gym, personal
                trainer dan sewa ruang senam. Dengan udara yang sejuk, bersih
                dan tempat yang luas.
              </Text>
              <Heading className="text-white">
                Yuk tunggu apa lagi, nge- gym ke winner sekarang!
              </Heading>
            </VStack>
          </Box>
          <HStack space="md">
            <Box className="flex-1 rounded-lg bg-white p-3 shadow">
              <VStack space="xs">
                <Text>Total Kunjungan Kamu</Text>
                <Text>Bulan ini</Text>
                <Heading size="2xl">0</Heading>
              </VStack>
            </Box>
            <Box className="flex-1 rounded-lg bg-white p-3 shadow">
              <VStack space="xs">
                <Text>Total Kunjungan Kamu</Text>
                <Text>Bulan ini</Text>
                <Heading size="2xl">0</Heading>
              </VStack>
            </Box>
          </HStack>
          <VStack space="xs">
            <Heading>Berita Terbaru</Heading>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <HStack space="md">
                {new Array(5).fill(0).map((_, index) => (
                  <Box
                    className="flex h-40 w-56 items-center justify-center rounded-lg bg-orange-400"
                    key={index}
                  >
                    <VStack space="sm">
                      <Heading className="text-white" size="2xl">
                        BERITA {index + 1}
                      </Heading>
                    </VStack>
                  </Box>
                ))}
              </HStack>
            </ScrollView>
          </VStack>
          <VStack space="xs">
            <Heading>FAQ</Heading>
            <Accordion
              size="md"
              variant="unfilled"
              type="single"
              isCollapsible={true}
              isDisabled={false}
              className="rounded-lg bg-white"
            >
              {FAQ.map((item, index) => (
                <AccordionItem value={index.toString()} key={index}>
                  <AccordionHeader>
                    <AccordionTrigger>
                      {({ isExpanded }) => {
                        return (
                          <>
                            <AccordionTitleText>
                              {item.title}
                            </AccordionTitleText>
                            {isExpanded ? (
                              <AccordionIcon
                                as={ChevronUpIcon}
                                className="ml-3"
                              />
                            ) : (
                              <AccordionIcon
                                as={ChevronDownIcon}
                                className="ml-3"
                              />
                            )}
                          </>
                        );
                      }}
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <AccordionContentText>{item.desc}</AccordionContentText>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </VStack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
