import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    listContainer: {
      paddingHorizontal: 16,
      paddingTop: 80,
      paddingBottom: 20,
      backgroundColor: '#000',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#4a90e2',
      marginLeft: 10,
    },
    subTaskContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#1c1c1e',
      padding: 12,
      borderRadius: 8,
      marginBottom: 10,
    },
    checkbox: {
      marginRight: 10,
    },
    subTaskText: {
      color: '#fff',
      fontSize: 16,
    },
    completedSubTask: {
      textDecorationLine: 'line-through',
      color: '#a1a1a1',
    },
    optionsContainer: {
      backgroundColor: '#1c1c1e',
      paddingBottom: 12,
      borderRadius: 8,
    },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#333',
    },
    optionText: {
      color: '#fff',
      fontSize: 16,
      marginLeft: 12,
    },
  });

export default styles;
