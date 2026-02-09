import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileDemo() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Profile Information</Text>

        <Text style={styles.text}>Course & Section: BSIS 3-B</Text>
        <Text style={styles.text}>Name: Louise Anne</Text>
        <Text style={styles.text}>Age: 20</Text>
        <Text style={styles.text}>Favorite Hobby: Watching Movies</Text>

        <Text style={styles.subtitle}>Pet Peeves in Class</Text>
        <Text style={styles.text}>• Too much noise</Text>
        <Text style={styles.text}>• Over-competitive behavior</Text>
        <Text style={styles.text}>• Not contributing in group work</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    marginTop: 4,
  },
});
