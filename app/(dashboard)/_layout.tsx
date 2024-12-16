import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { Dimensions, Platform } from 'react-native';
import TabBarBackground from '@/components/ui/TabBarBackground';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        animation: 'fade',
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
        sceneStyle: {
          paddingHorizontal: 16,
          paddingTop: 16,
          zIndex: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={28}
              name="house.fill"
              color={focused ? 'orange' : color}
            />
          ),
          tabBarActiveTintColor: 'orange',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={28}
              name="person.2.fill"
              color={focused ? 'orange' : color}
            />
          ),
          tabBarActiveTintColor: 'orange',
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Setting',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={28}
              name="option"
              color={focused ? 'orange' : color}
            />
          ),
          tabBarActiveTintColor: 'orange',
        }}
      />
    </Tabs>
  );
}
