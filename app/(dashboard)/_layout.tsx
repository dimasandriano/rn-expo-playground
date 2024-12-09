import { Stack } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'ios_from_right',
        contentStyle: { padding: 16 },
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
