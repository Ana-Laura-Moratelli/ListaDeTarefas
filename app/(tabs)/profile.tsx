import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View>
        <MaterialCommunityIcons name="account-circle" size={160} color="#4A90E2" />
      </View>

      <Text style={styles.nameText}>Ana Laura</Text>
      <Text style={styles.emailText}>analauramoratelli@gmail.com</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ana Laura"
          placeholderTextColor="#a1a1a1"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Moratelli"
          placeholderTextColor="#a1a1a1"
          value={lastName}
          onChangeText={setLastName}
        />
        <View style={styles.phoneInputContainer}>
          <Text style={styles.flag}>🇧🇷</Text>
          <TextInput
            style={styles.phoneInput}
            placeholder="12 99747-4368"
            placeholderTextColor="#a1a1a1"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Feminino"
          placeholderTextColor="#a1a1a1"
          value={gender}
          onChangeText={setGender}
        />
        <View style={styles.dateInputContainer}>
          <MaterialCommunityIcons name="calendar" size={24} color="#a1a1a1" style={styles.calendarIcon} />
          <TextInput
            style={styles.dateInput}
            placeholder="19/03/2005"
            placeholderTextColor="#a1a1a1"
            keyboardType="numeric"
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
          />
        </View>
      </View>
    </ScrollView>
  );
}

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
