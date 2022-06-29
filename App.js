import { StyleSheet, View } from 'react-native';
import Integer from './integer';
import Pgcd from './pgcd';

export default function App() {
  return (
    <View style={styles.container}>
      <Integer />
      <Pgcd />
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
});
