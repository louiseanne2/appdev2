import { View, Text, StyleSheet } from 'react-native';

export default function ProfileDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Demo</Text>

      <View style={styles.card}>
        <Text style={styles.text}>Course & Section: BSIS-3B</Text>
        <Text style={styles.text}>Name: Louise Anne</Text>
        <Text style={styles.text}>Age: 20</Text>
        <Text style={styles.text}>Favorite Hobby: Watching Movies</Text>


        <Text style={styles.text}>Pet Peeves in Class:</Text>
        <Text style={styles.list}>• Too much noise</Text>
        <Text style={styles.list}>• Talking while someone is presenting</Text>
        <Text style={styles.list}>• Not paying attention</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  bio: {
    fontSize: 15,
    marginBottom: 10,
    color: '#555',
  },
  list: {
    fontSize: 15,
    marginLeft: 10,
  },
});
