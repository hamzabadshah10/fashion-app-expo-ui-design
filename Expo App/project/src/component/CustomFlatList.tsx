import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const CustomFlatList = () => {
  const flatListData = [
    { id: '1', title: 'FlatList Item 1' },
    { id: '2', title: 'FlatList Item 2' },
    { id: '3', title: 'FlatList Item 3' },
    { id: '4', title: 'FlatList Item 4' },
    { id: '5', title: 'FlatList Item 5' },
    { id: '6', title: 'FlatList Item 6' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>FlatList Section</Text>
      <View style={styles.flatListContainer}>
        <FlatList
          data={flatListData}
          scrollEnabled={false}
          renderItem={({ item, index }) => (
            <View style={[
              styles.flatListItem,
              index % 2 === 0 ? styles.evenItem : styles.oddItem
            ]}>
              <Text style={styles.flatListText}>{item.title}</Text>
              <Text style={styles.indexText}>Index: {index}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
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
  flatListContainer: {
    marginHorizontal: 15,
  },
  flatListItem: {
    padding: 15,
    marginVertical: 4,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  evenItem: {
    backgroundColor: '#fff3e0',
  },
  oddItem: {
    backgroundColor: '#f3e5f5',
  },
  flatListText: {
    fontSize: 16,
    fontWeight: '500',
  },
  indexText: {
    fontSize: 14,
    color: '#666',
  },
});

export default CustomFlatList;