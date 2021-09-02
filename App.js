import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function App() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [total, setTotal] = useState(0);

  const somar = () => {
    console.log("Somei");
    return parseInt(x) + parseInt(y);
  }

  const resultado = useMemo(() => {
    return somar();
  }, [x,y]);

  useEffect(() => {
    console.log("useEffect");
  }, [total]);

  return ( 
    <View style={styles.container}>
      <Text style={[styles.text, {fontWeight:'bold'}]}>useMemo</Text>
      <Text style={styles.text}>CALCULADORA</Text>
      <TextInput
            keyboardType="numeric"
            placeholder={0}
            onChangeText={(valor) => setX(valor.length > 0 ? valor : 0)}
            style={styles.textInput}
        />
         <TextInput
            keyboardType="numeric"
            placeholder={0}
            onChangeText={(valor) => setY(valor.length > 0 ? valor : 0)}
            style={styles.textInput}
        />
        <Button
          mode="contained"
          onPress={() => setTotal(resultado)}
        >somar</Button>
        <Text style={styles.text}>Resultado: {total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 2,
    padding: 4,
    margin: 2,
    width: 100,
    textAlign: 'center',
    margin: 6,
  },
  text: {
    margin: 6,
    fontSize: 18,
  }
});
