import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const HorizontalScrollView = () => {
  const scrollViewData = [
    { id: '1', title: 'Card 1' },
    { id: '2', title: 'Card 2' },
    { id: '3', title: 'Card 3' },
    { id: '4', title: 'Card 4' },
    { id: '5', title: 'Card 5' },
    { id: '6', title: 'Card 3' },
    { id: '7', title: 'Card 4' },
    { id: '8', title: 'Card 5' },
    { id: '9', title: 'Card 3' },
    { id: '10', title: 'Card 4' },
    { id: '11', title: 'Card 5' },
    { id: '12', title: 'Card 5' },
    { id: '13', title: 'Card 5' },
    { id: '14', title: 'Card 5' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Horizontal ScrollView (Cards)</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={true}
        style={styles.horizontalScrollView}
      >
        {scrollViewData.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardText}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
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
  horizontalScrollView: {
    marginHorizontal: 10,
  },
  card: {
    width: 120,
    height: 80,
    backgroundColor: '#b71212ff',
    marginHorizontal: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HorizontalScrollView;