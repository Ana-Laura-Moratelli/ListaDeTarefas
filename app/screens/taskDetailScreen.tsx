import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../../styles/taskDetailScreen';

interface SubTask {
  id: string;
  title: string;
  completed: boolean;
}

export default function TaskDetailScreen() {
  const [subTasks, setSubTasks] = useState<SubTask[]>([
    { id: '1', title: 'Testando etapa', completed: false },
  ]);

  const toggleSubTaskCompletion = (id: string) => {
    setSubTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const renderSubTask = ({ item }: { item: SubTask }) => (
    <View style={styles.subTaskContainer}>
      <TouchableOpacity onPress={() => toggleSubTaskCompletion(item.id)} style={styles.checkbox}>
        {item.completed ? (
          <MaterialCommunityIcons name="checkbox-marked-circle" size={24} color="#4a90e2" />
        ) : (
          <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={24} color="#a1a1a1" />
        )}
      </TouchableOpacity>
      <Text style={[styles.subTaskText, item.completed && styles.completedSubTask]}>
        {item.title}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={subTasks}
      keyExtractor={(item) => item.id}
      renderItem={renderSubTask}
      ListHeaderComponent={
        <View>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="arrow-left" size={28} color="#4a90e2" />
            </TouchableOpacity>
            <Text style={styles.title}>Compras</Text>
          </View>
        </View>
      }
      ListFooterComponent={
        <View style={styles.optionsContainer}>
          <Option icon="account-arrow-right" text="Atribuir a" />
          <Option icon="weather-sunny" text="Adicionar a Meu Dia" />
          <Option icon="bell-outline" text="Lembrar-me" />
          <Option icon="calendar-outline" text="Adicionar data de conclusão" />
          <Option icon="sync" text="Repetir" />
          <Option icon="attachment" text="Adicionar arquivo" />
          <Option icon="pencil-outline" text="Adicionar anotação" />
        </View>
      }
      contentContainerStyle={styles.listContainer}
    />
  );
}

const Option = ({ icon, text }: { icon: keyof typeof MaterialCommunityIcons.glyphMap; text: string }) => (
  <TouchableOpacity style={styles.option}>
    <MaterialCommunityIcons name={icon} size={24} color="#a1a1a1" />
    <Text style={styles.optionText}>{text}</Text>
  </TouchableOpacity>
);


