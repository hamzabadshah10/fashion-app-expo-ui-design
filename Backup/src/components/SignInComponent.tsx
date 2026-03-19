import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import GlobalStyles from '../styles/GlobalStyles';

export default function SignInComponent({ navigation }: { navigation: any }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 1. We use .trim() to remove accidental spaces at the end
    const cleanName = name.trim();
    const cleanPass = password.trim();

    // Debugging: This will show you exactly what is being checked in your terminal
    console.log("Checking credentials:", cleanName, cleanPass);

    if (cleanName === 'Hamza Badshah' && cleanPass === '123') {
      navigation.replace('Home');
    } else {
      Alert.alert('Login Failed', 'Please use Name: "Hamza Badshah" and Password: "123"');
    }
  };

  return (
    <SafeAreaView  style={GlobalStyles.authContainer}>
      <View style={GlobalStyles.logoWrapper}>
        <Ionicons name="planet-outline" size={200} color={Colors.white} />
      </View>

      <Text style={GlobalStyles.inputLabel}> </Text>
      <TextInput
        style={GlobalStyles.inputField}
        placeholder="Enter Name"
        placeholderTextColor="#ccc"
        value={name}
        onChangeText={setName}
      />

      <Text style={GlobalStyles.inputLabel}> </Text>
      <TextInput
        style={GlobalStyles.inputField}
        placeholder="Password"
        placeholderTextColor="#ccc"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={() => console.log('Reload')}>
        <Text style={GlobalStyles.forgotText}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={GlobalStyles.whiteButton} onPress={handleLogin}>
        <Text style={GlobalStyles.whiteButtonText}>SIGN IN</Text>
      </TouchableOpacity>

      <Text style={GlobalStyles.orText}>OR</Text>

      <TouchableOpacity style={GlobalStyles.googleButton} onPress={() => console.log('Reload')}>
        <Text style={GlobalStyles.googleIconText}>G</Text>
      <Text style={[GlobalStyles.whiteButtonText, { color: 'red' }]}> LOGIN USING GOOGLE </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={GlobalStyles.bottomLink}>Create an account</Text>
      </TouchableOpacity>
    </SafeAreaView >
  );
}