import { View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import FoodCalculator from '../../../../components/Calculator';

export default function Calculadora() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Calculadora de alimento natural',
        }}
      />

      <View style={styles.container}>
        <FoodCalculator/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 24, fontWeight: 'bold' },
});
