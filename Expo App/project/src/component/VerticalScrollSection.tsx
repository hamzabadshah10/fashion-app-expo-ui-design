import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const VerticalScrollSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Vertical ScrollView Section</Text>
      <View style={styles.verticalScrollSection}>
        <Text style={styles.scrollItem}>Mobile App Development</Text>
        <Text style={styles.scrollItem}>Web Development</Text>
        <Text style={styles.scrollItem}>Artificial Intelligence</Text>
        <Text style={styles.scrollItem}>Data Science</Text>
        <Text style={styles.scrollItem}>Cloud Computing</Text>
        <Text style={styles.scrollItem}>Cybersecurity</Text>
        <Text style={styles.scrollItem}>Game Development</Text>
        <Text style={styles.scrollItem}>UI/UX Design</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 10,
    color: '#444',
  },
  verticalScrollSection: {
    backgroundColor: '#e3f2fd',
    marginHorizontal: 15,
    borderRadius: 8,
    padding: 10,
  },
  scrollItem: {
    fontSize: 16,
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#bbdefb',
  },
});

export default VerticalScrollSection;