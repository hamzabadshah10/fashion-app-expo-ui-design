import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import CustomFlatList from '../../src/component/CustomFlatList';
import HorizontalScrollView from '../../src/component/HorizontalScrollView';
import VerticalScrollSection from '../../src/component/VerticalScrollSection';

const App = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
      
      {/* Header Section */}
      <Text style={styles.mainHeader}>ScrollView & FlatList</Text>
      
      {/* All Components */}
      <HorizontalScrollView />
      <VerticalScrollSection />
      <CustomFlatList />
    

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  mainHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
});

export default App;