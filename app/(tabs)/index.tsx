import { FlatList, View, TouchableOpacity, Text } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import Card from '@/components/Card/Card';
import { ComponentProps } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../../styles/index';

type MaterialCommunityIconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

const data: Array<{
  id: string;
  iconName: MaterialCommunityIconName;
  iconColor: string;
  title: string;
  count: number;
}> = [
  { id: '1', iconName: 'calendar-month', iconColor: '#4a90e2', title: 'Hoje', count: 1 },
  { id: '2', iconName: 'calendar-check', iconColor: '#e94e77', title: 'Programados', count: 20 },
  { id: '3', iconName: 'archive-outline', iconColor: '#a1a1a1', title: 'Todos', count: 33 },
  { id: '4', iconName: 'flag-outline', iconColor: '#f5a623', title: 'Sinalizados', count: 0 },
  { id: '5', iconName: 'check-circle-outline', iconColor: '#8ed081', title: 'Concluídos', count: 15 },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <View style={styles.header}>
          <ThemedText style={styles.title} type="title">
            Lista de Tarefas!
          </ThemedText>
          <HelloWave />
        </View>
      }
      renderItem={({ item }) => (
        <Card
          iconName={item.iconName}
          iconColor={item.iconColor}
          title={item.title}
          count={item.count}
        />
      )}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.listContainer}
      ListFooterComponent={
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>+ Nova Lista</Text>
          </TouchableOpacity>
        </View>
      }
      
    />
    </View>
     
  );
}