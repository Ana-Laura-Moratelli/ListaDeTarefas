import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ComponentProps } from 'react';
import { useRouter } from 'expo-router';
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
  { id: '1', iconName: 'home', iconColor: '#ff5c5c', title: 'Tarefas semanais', count: 13 },
];

const ListScreen: React.FC = () => {
  const router = useRouter();

  const navigateToTasks = () => {
    router.push('/screens/taskListScreen'); // Substitua pelo caminho correto da sua página de tarefas
  };

  const renderItem = ({ item }: { item: ListItem }) => (
    <TouchableOpacity onPress={navigateToTasks}>
      <View style={styles.cardContainer}>
        <View style={styles.leftSection}>
          <View style={[styles.iconContainer, { backgroundColor: item.iconColor }]}>
            <MaterialCommunityIcons name={item.iconName} size={24} color="#fff" />
          </View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <Text style={styles.count}>{item.count}</Text>
      </View>
    </TouchableOpacity>
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
