import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{
        headerStyle: {
          backgroundColor: '#2a9d8f',
        },
        headerTintColor: 'black',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="auth" options={{ headerShown: false }} />
    </Stack>
  );
}
