import { Picker } from '@react-native-picker/picker';
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { calculateFoodAmount, LifeStage, ActivityLevel } from '../utils/calculatorLogic';

export default function FoodCalculator() {
  const [pesoAlvo, setPesoAlvo] = useState('');
  const [lifeStage, setLifeStage] = useState<LifeStage>('adulto');
  const [castrado, setCastrado] = useState(false);
  const [activity, setActivity] = useState<ActivityLevel>('pouco_ativo');
  const [result, setResult] = useState<null | {
    total: number;
    carcaca: number;
    viscera: number;
    musculo: number;
  }>(null);

  const handleCalculate = () => {
    const peso = parseFloat(pesoAlvo);
    if (isNaN(peso)) return;

    const res = calculateFoodAmount(peso, lifeStage, castrado, activity);
    setResult(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Peso alvo (kg):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={pesoAlvo}
        onChangeText={setPesoAlvo}
        placeholder="Ex: 10"
      />

      <Text style={styles.label}>Fase da vida:</Text>
      <Picker selectedValue={lifeStage} onValueChange={(v) => setLifeStage(v)}>
        <Picker.Item label="Adulto" value="adulto" />
        <Picker.Item label="Idoso" value="idoso" />
        <Picker.Item label="Filhote" value="filhote" />
      </Picker>

      <Text style={styles.label}>Castrado?</Text>
      <Picker selectedValue={castrado ? 'sim' : 'nao'} onValueChange={(v) => setCastrado(v === 'sim')}>
        <Picker.Item label="Sim" value="sim" />
        <Picker.Item label="Não" value="nao" />
      </Picker>

      <Text style={styles.label}>Nível de atividade:</Text>
      <Picker selectedValue={activity} onValueChange={(v) => setActivity(v)}>
        <Picker.Item label="Pouco ativo" value="pouco_ativo" />
        <Picker.Item label="Ativo" value="ativo" />
        <Picker.Item label="Muito ativo" value="muito_ativo" />
      </Picker>
      
      <View style={styles.content2}>
        <TouchableOpacity style={styles.buttonStyle} onPress={handleCalculate}>
          <Text style={styles.resultText}>Calcular</Text>
        </TouchableOpacity>
      </View>

      {result && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Total por dia: {result.total.toFixed()} g</Text>
          <Text>• Carcaça: {result.carcaca.toFixed()} g</Text>
          <Text>• Vísceras: {result.viscera.toFixed()} g</Text>
          <Text>• Músculo: {result.musculo.toFixed()} g</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    marginTop: 12,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    fontSize: 16,
    paddingVertical: 4,
    marginBottom: 8,
  },
  result: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2a9d8f',
    borderRadius: 8,
  },
  resultText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#2a9d8f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content2: {
    alignItems: 'center',
  },
});

