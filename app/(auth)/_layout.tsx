import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: 'transparent' },
        animation: 'ios_from_right',
        contentStyle: { padding: 16 },
      }}
    >
      <Stack.Screen name="login" options={{ title: 'Login Member' }} />
    </Stack>
  );
}
