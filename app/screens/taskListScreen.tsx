import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTaskContext, Task } from '../../contexts/TaskContext';
import styles from '../../styles/taskListScreen';

export default function TaskListScreen() {
  const {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleCompletion,
    toggleFavorite,
    reorderTasks,
  } = useTaskContext();

  const [recentlyDeletedTask, setRecentlyDeletedTask] = useState<Task | null>(null);
  const [undoTimer, setUndoTimer] = useState<NodeJS.Timeout | null>(null);
  const [newTask, setNewTask] = useState('');
  const [newDueDate, setNewDueDate] = useState('');
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editingTaskTitle, setEditingTaskTitle] = useState('');
  const [editingTaskDueDate, setEditingTaskDueDate] = useState('');
  const inputRef = useRef<TextInput>(null);

  // Carrega tarefas salvas ao abrir
  useEffect(() => {
    const loadTasks = async () => {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks) {
        reorderTasks(JSON.parse(savedTasks));
      }
    };
    loadTasks();
  }, []);

  // Salva tarefas sempre que forem modificadas
  useEffect(() => {
    AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Simular tarefas de outros colaboradores
  useEffect(() => {
    const interval = setInterval(() => {
      const simulatedTask: Task = {
        id: Date.now().toString(),
        title: `Tarefa Simulada ${Math.floor(Math.random() * 100)}`,
        dueDate: '01/02/2025',
        completed: false, 
        favorited: false,
        state: 'active',
      };
      addTask(simulatedTask);
    }, 15000); // A cada 15 segundos

    return () => clearInterval(interval);
  }, []);

  // Formato da data ao adicionar task
  const handleDateChange = (text: string) => {
    let formattedText = text.replace(/\D/g, '');

    if (formattedText.length >= 5) {
      formattedText = `${formattedText.slice(0, 2)}/${formattedText.slice(
        2,
        4
      )}/${formattedText.slice(4, 8)}`;
    } else if (formattedText.length >= 3) {
      formattedText = `${formattedText.slice(0, 2)}/${formattedText.slice(
        2,
        4
      )}`;
    }

    setNewDueDate(formattedText);
  };

  // Adicionar uma nova task
  const handleAddTask = () => {
    if (!newTask.trim()) {
      Alert.alert('Erro', 'Por favor, insira o nome da tarefa.');
      return;
    }
    if (newDueDate.length !== 10) {
      Alert.alert('Erro', 'Por favor, insira uma data de vencimento válida.');
      return;
    }

    // Delay ao adicionar Task
    setTimeout(() => {
      addTask({
        id: Date.now().toString(),
        title: newTask,
        dueDate: newDueDate,
        completed: false,
        favorited: false,
        state: 'active',
      });
    }, 1000);

    setNewTask('');
    setNewDueDate('');
  };

  
  // Deletar uma task e mostrar o botão de "Desfazer"
  const handleDeleteTask = (id: string) => {
    const taskToDelete = tasks.find((t) => t.id === id);
    if (!taskToDelete) return;
    deleteTask(id);
    setRecentlyDeletedTask(taskToDelete);

    if (undoTimer) {
      clearTimeout(undoTimer);
    }

    const timer = setTimeout(() => {
      setRecentlyDeletedTask(null);
    }, 5000);

    setUndoTimer(timer);
  };

  const handleUndoDelete = () => {
    if (recentlyDeletedTask) {
      addTask(recentlyDeletedTask);
    }

    setRecentlyDeletedTask(null);
    if (undoTimer) {
      clearTimeout(undoTimer);
      setUndoTimer(null);
    }
  };

  // Editar Task
  const handleEditTask = () => {
    if (
      editingTaskId &&
      editingTaskTitle.trim() &&
      editingTaskDueDate.length === 10
    ) {
      setTimeout(() => {
        if (updateTask(editingTaskId, editingTaskTitle, editingTaskDueDate)) {
          setEditingTaskId(null);
          setEditingTaskTitle('');
          setEditingTaskDueDate('');
        }
      }, 1000);
    }
  };

  const handleReorderTasks = (data: Task[]) => {
    setTimeout(() => {
      reorderTasks(data);
    }, 1500);
  };

  const renderTask = ({ item, drag }: RenderItemParams<Task>) => {
    if (editingTaskId === item.id) {
      return (
        <View style={styles.editContainer}>
          <TextInput
            style={styles.input}
            placeholder="Editar título"
            value={editingTaskTitle}
            onChangeText={setEditingTaskTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Editar data de vencimento"
            value={editingTaskDueDate}
            onChangeText={setEditingTaskDueDate}
            keyboardType="numeric"
          />
          <TouchableOpacity onPress={handleEditTask}>
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <TouchableOpacity onLongPress={drag} style={styles.taskContainer}>
        <TouchableOpacity
          onPress={() => toggleCompletion(item.id)}
          style={styles.checkbox}
        >
          {item.completed ? (
            <MaterialCommunityIcons
              name="checkbox-marked-circle"
              size={24}
              color="#4a90e2"
            />
          ) : (
            <MaterialCommunityIcons
              name="checkbox-blank-circle-outline"
              size={24}
              color="#a1a1a1"
            />
          )}
        </TouchableOpacity>
        <View style={styles.taskInfo}>
          <Text
            style={[styles.taskText, item.completed && styles.completedTask]}
          >
            {item.title}
          </Text>
          <Text style={styles.dueDateText}>Vence em: {item.dueDate}</Text>
        </View>
        <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
          <MaterialCommunityIcons
            name="star"
            size={24}
            color={item.favorited ? '#FFD700' : '#a1a1a1'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setEditingTaskId(item.id);
            setEditingTaskTitle(item.title);
            setEditingTaskDueDate(item.dueDate);
          }}
        >
          <MaterialCommunityIcons
            name="pencil-outline"
            size={24}
            color="#a1a1a1"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={24}
            color="#ff5c5c"
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tarefas semanais</Text>

        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Digite a nova tarefa"
          placeholderTextColor="#a1a1a1"
          value={newTask}
          onChangeText={setNewTask}
        />

        <TextInput
          style={styles.input}
          placeholder="Data de vencimento (dd/mm/aaaa)"
          placeholderTextColor="#a1a1a1"
          value={newDueDate}
          onChangeText={handleDateChange}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Adicionar Tarefa</Text>
        </TouchableOpacity>
      </View>

      <DraggableFlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
        onDragEnd={({ data }) => handleReorderTasks(data)}
      />

      {/* Banner de desfazer */}
      {recentlyDeletedTask && (
        <View style={{ 
          backgroundColor: '#4a90e2', 
          padding: 10, 
          flexDirection: 'row', 
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 8,
        }}>
          <Text style={{ color: '#black' }}>Tarefa excluída</Text>
          <TouchableOpacity onPress={handleUndoDelete}>
            <Text style={{ color: 'black' }}>Desfazer</Text>
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}
