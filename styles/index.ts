import { StyleSheet } from 'react-native';

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

export default styles;
