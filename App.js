import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { API_BASE } from './constants/API'; // 🌟 NEW: Import API base URL

export default function App() {
  const [goal, setGoal] = useState('');
  const [steps, setSteps] = useState('');

  const generateSteps = async () => {
    try {
      const response = await fetch(`${API_BASE}/generate-steps`, { // 🌟 UPDATED
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ goal: goal }),
      });

      const data = await response.json();
      setSteps(data.steps); // We get steps inside "steps" key
    } catch (error) {
      console.error('Error generating steps:', error);
      setSteps('Failed to generate steps. Please try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🎯 Welcome to TaskWizard</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your goal here..."
        placeholderTextColor="#999"
        value={goal}
        onChangeText={setGoal}
      />

      <TouchableOpacity style={styles.button} onPress={generateSteps}>
        <Text style={styles.buttonText}>Generate Steps</Text>
      </TouchableOpacity>

      {steps !== '' && (
        <Text style={styles.result}>
          {steps}
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0a0a23',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginVertical: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#1c1c3a',
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#5c6bc0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  result: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'left',
    marginTop: 20,
  },
});