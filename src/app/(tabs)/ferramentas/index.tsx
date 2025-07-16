import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const ferramentas = [
  {
    id: '1',
    title: 'Calculadora de alimentação natural',
    route: '/(tabs)/ferramentas/calculadora',
  },
  {
    id: '2',
    title: 'Conversor de Unidades',
    route: '/(tabs)/ferramentas/conversor',
  },
];

export default function ListaFerramentas() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={ferramentas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => router.push(item.route)}
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 30, flex: 1 },
  item: { padding: 4, backgroundColor: '#2a9d8f', borderRadius: 8 },
  title: { fontSize: 16, fontWeight: '500', textAlign: 'center' },
  separator: { height: 8 },
});
