import React, { useState } from 'react';
import {
  FlatList,
  Text,
  View,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Calculadora from './calculadora';
//import Ferramenta2 from './ferramenta2';
//import Ferramenta3 from './ferramenta3';

const ferramentas = [
  {
    id: '1',
    title: 'Calculadora de alimentação natural',
    componente: Calculadora,
  },
  /*{
    id: '2',
    title: 'Ferramenta 2',
    componente: Ferramenta2,
  },*/
  /*{
    id: '3',
    title: 'Ferramenta 3',
    componente: Ferramenta3,
  },*/
];

export default function ListaFerramentas() {
  const [modalVisible, setModalVisible] = useState(false);
  const [FerramentaSelecionada, setFerramentaSelecionada] = useState<React.ComponentType | null>(null);

  const abrirModal = (componente: React.ComponentType) => {
    setFerramentaSelecionada(() => componente);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
    setFerramentaSelecionada(null);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={ferramentas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LinearGradient
            colors={['#ff3939ff', '#9e0b0bff', '#3f0707ff']}
            style={{
            padding: 8,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: 'black',
            // Sombra no iOS
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 4,

            // Sombra no Android
            elevation: 20,
            }}
          >
            <TouchableOpacity
              style={styles.item}
              onPress={() => abrirModal(item.componente)}
            >
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          </LinearGradient>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.fechar} onPress={fecharModal}>
            <LinearGradient
            colors={['#ff3939ff', '#9e0b0bff', '#3f0707ff']}
            style={{
            padding: 1,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: 'black',
            // Sombra no iOS
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 4,

            // Sombra no Android
            elevation: 20,
            }}
            >
              <Text style={styles.textoFechar}>Fechar</Text>
            </LinearGradient>  
          </TouchableOpacity>
          {FerramentaSelecionada && <FerramentaSelecionada />}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  /*item: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#2a9d8f',

    // Sombra no iOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 }, // desce a sombra
    shadowOpacity: 0.2,
    shadowRadius: 4,

    // Sombra no Android
    elevation: 20,
  },*/
  title: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'white'
  },
  separator: {
    height: 10,
  },
  modalContent: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  fechar: {
    alignSelf: 'flex-end',
    marginBottom: 10,
    backgroundColor: '#9e0b0bff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black'
  },
  textoFechar: {
    color: 'white',
    fontSize: 16,
    margin: 4,
  },
});
