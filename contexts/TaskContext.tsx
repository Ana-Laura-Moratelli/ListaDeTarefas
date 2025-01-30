import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Task {
    id: string;
    title: string;
    dueDate: string;
    completed: boolean;
    favorited: boolean;
    state: 'active' | 'completed' | 'edited' | 'deleted';
  }
  

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (id: string, title: string, dueDate: string) => boolean;
  deleteTask: (id: string) => void;
  toggleCompletion: (id: string) => void;
  toggleFavorite: (id: string) => void;
  reorderTasks: (newTasks: Task[]) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);


export function useTaskContext() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
}

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => setTasks((prevTasks) => [...prevTasks, task]);

  const updateTask = (id: string, title: string, dueDate: string): boolean => {
    const currentDate = new Date().toLocaleDateString('pt-BR');

    if (new Date(dueDate.split('/').reverse().join('-')) < new Date(currentDate.split('/').reverse().join('-'))) {
      alert('A data de vencimento não pode ser anterior à data atual.');
      return false;
    }

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, title, dueDate, state: 'edited' } : task
      )
    );
    return true;
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  

  const toggleCompletion = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed, state: 'completed' } : task
      )
    );
  };

  const toggleFavorite = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, favorited: !task.favorited } : task))
    );
  };
  
  const reorderTasks = (newTasks: Task[]) => {
    setTasks(newTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, toggleCompletion, toggleFavorite, reorderTasks  }}>
      {children}
    </TaskContext.Provider>
  );
};
