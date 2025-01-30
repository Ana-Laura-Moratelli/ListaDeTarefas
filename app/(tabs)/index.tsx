import { FlatList, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import Card from '@/components/card';
import { ComponentProps } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

const styles = StyleSheet.create({

  container: {
    flex: 1, 
    backgroundColor: '#00000',
    paddingHorizontal: 16,
  },

  header: {
    paddingTop: 80,
    paddingVertical: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
   
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  row: {
    justifyContent: 'space-around',
  },
  listContainer: {
    paddingBottom: 80,
   
  },
  footer: {
    paddingTop: 296,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  button: {
    flex: 1,
    backgroundColor: '#1c73e8',
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
