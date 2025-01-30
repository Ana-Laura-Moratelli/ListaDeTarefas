import React, { useState } from 'react';
import { View, TextInput, Text, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../../styles/profile';

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
      <Text style={styles.emailText}>analauramoratelli203@gmail.com</Text>

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

