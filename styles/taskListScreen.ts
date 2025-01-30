import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    header: {
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#4a90e2',
        marginBottom: 10,
    },
    input: {
        height: 50,
        backgroundColor: '#333',
        color: '#ffffff',
        paddingHorizontal: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    listContainer: {
        paddingBottom: 20,
    },
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1c1c1e',
        borderRadius: 8,
        padding: 16,
        marginBottom: 10,
    },
    checkbox: {
        marginRight: 10,
    },
    taskText: {
        color: '#ffffff',
        fontSize: 16,
        flex: 1,
    },
    completedTask: {
        textDecorationLine: 'line-through',
        color: '#a1a1a1',
    },

    taskInfo: {
        flex: 1,
    },

    dueDateText: {
        color: '#a1a1a1',
        fontSize: 12,
    },

    addButton: {
        backgroundColor: '#4a90e2',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        
      },
      addButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
      },

      editContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        backgroundColor: '#1c1c1e',
        borderRadius: 8,
        marginBottom: 8,
      },
      saveButtonText: {
        color: '#4a90e2',
        fontWeight: 'bold',
        fontSize: 16,
        paddingHorizontal: 10,
      },
      
});

export default styles;
