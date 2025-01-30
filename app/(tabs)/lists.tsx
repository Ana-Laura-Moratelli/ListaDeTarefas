import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { View, Text, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { ComponentProps } from 'react';
import styles from '../../styles/lists';

type MaterialCommunityIconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

interface ListItem {
  id: string;
  iconName: MaterialCommunityIconName;
  iconColor: string;
  title: string;
  count: number;
}

const data: ListItem[] = [
  { id: '1', iconName: 'home', iconColor: '#ff5c5c', title: 'Day by day', count: 13 },
  { id: '2', iconName: 'laptop', iconColor: '#5da6ff', title: 'Study', count: 0 },
  { id: '3', iconName: 'currency-usd', iconColor: '#ffc107', title: 'Contas', count: 18 },
  { id: '4', iconName: 'dumbbell', iconColor: '#4caf50', title: 'Saúde', count: 2 },
  { id: '5', iconName: 'trash-can', iconColor: '#9e9e9e', title: 'Apagados', count: 4 },
];

const ListScreen: React.FC = () => {
  const renderItem = ({ item }: { item: ListItem }) => (
    <View style={styles.cardContainer}>
      <View style={styles.leftSection}>
        <View style={[styles.iconContainer, { backgroundColor: item.iconColor }]}>
          <MaterialCommunityIcons name={item.iconName} size={24} color="#fff" />
        </View>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <Text style={styles.count}>{item.count}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={
          <View style={styles.header}>
            <ThemedText style={styles.headerTitle} type="title">
              Listas
            </ThemedText>
          </View>
        }
      />
    </View>
  );
};


export default ListScreen;
