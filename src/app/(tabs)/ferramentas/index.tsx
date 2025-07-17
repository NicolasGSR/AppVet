import React, { useState } from 'react';
import {
  FlatList,
  Text,
  View,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
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
          <TouchableOpacity
            style={styles.item}
            onPress={() => abrirModal(item.componente)}
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.fechar} onPress={fecharModal}>
            <Text style={styles.textoFechar}>Fechar</Text>
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
  item: {
    padding: 10,
    backgroundColor: '#2a9d8f',
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
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
    backgroundColor: '#2a9d8f',
    borderRadius: 8,
  },
  textoFechar: {
    color: 'black',
    fontSize: 16,
    margin: 4,
  },
});
