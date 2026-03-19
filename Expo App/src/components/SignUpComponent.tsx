import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import GlobalStyles from '../styles/GlobalStyles';

export default function SignUpComponent({ navigation }: { navigation: any }) {

  const handleSignUp = () => {
    Alert.alert('Success', 'Account Created Successfully!');
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView  style={GlobalStyles.authContainer}>
      <View style={GlobalStyles.logoWrapper}>
        <Ionicons name="planet-outline" size={100} color={Colors.white} />
      </View>

      <Text style={GlobalStyles.inputLabel}> </Text>
      <TextInput style={GlobalStyles.inputField} placeholder="Enter Name" placeholderTextColor="#ccc" />

      <Text style={GlobalStyles.inputLabel}> </Text>
      <TextInput style={GlobalStyles.inputField} placeholder="Email" placeholderTextColor="#ccc" />

      <Text style={GlobalStyles.inputLabel}>Birth Date</Text>
      <View style={GlobalStyles.dateDropdown}>
        <Text style={GlobalStyles.dateText}>Select Date</Text>
        <Ionicons name="chevron-down" size={20} color={Colors.white} />
      </View>

      <Text style={GlobalStyles.inputLabel}>Password</Text>
      <TextInput style={GlobalStyles.inputField} secureTextEntry={true} />

      <Text style={GlobalStyles.inputLabel}>Confirm Password</Text>
      <TextInput style={GlobalStyles.inputField} secureTextEntry={true} />

      <TouchableOpacity style={GlobalStyles.whiteButton} onPress={handleSignUp}>
        <Text style={GlobalStyles.whiteButtonText}>SIGN UP</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={GlobalStyles.bottomLink}>Already have an account? Login Here</Text>
      </TouchableOpacity>
    </SafeAreaView >
  );
}