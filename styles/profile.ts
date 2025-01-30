import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      paddingHorizontal: 16,
      paddingTop: 80,
      backgroundColor: '#000',
      alignItems: 'center',
    },
    
    nameText: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#fff',
    },
    emailText: {
      fontSize: 14,
      color: '#a1a1a1',
      marginBottom: 24,
    },
    inputContainer: {
      width: '100%',
    },
    input: {
      backgroundColor: '#1c1c1e',
      padding: 14,
      borderRadius: 8,
      marginBottom: 12,
      fontSize: 16,
      color: '#fff',
    },
    phoneInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#1c1c1e',
      padding: 14,
      borderRadius: 8,
      marginBottom: 12,
    },
    flag: {
      fontSize: 20,
      marginRight: 10,
    },
    phoneInput: {
      flex: 1,
      fontSize: 16,
      color: '#fff',
    },
    dateInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#1c1c1e',
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: 8,
      marginBottom: 12,
    },
    calendarIcon: {
      marginRight: 10,
    },
    dateInput: {
      flex: 1,
      fontSize: 16,
      color: '#fff',
    },
    updateButton: {
      backgroundColor: '#4A90E2',
      paddingVertical: 14,
      paddingHorizontal: 32,
      borderRadius: 8,
      marginTop: 20,
      width: '100%',
      alignItems: 'center',
    },
    updateButtonText: {
      fontSize: 18,
      fontWeight: '600',
      color: '#FFFFFF',
    },
  });

export default styles;
