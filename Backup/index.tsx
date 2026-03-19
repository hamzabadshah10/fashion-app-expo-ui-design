import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// Import all screens
// Correct imports for a file inside app/(tabs)/
import HomeComponent from '../../src/components/HomeComponent';
import ProductDetailComponent from '../../src/components/ProductDetailComponent';
import SignInComponent from '../../src/components/SignInComponent';
import SignUpComponent from '../../src/components/SignUpComponent';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Stack Navigator manages the history and flow of screens
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name="SignIn" component={SignInComponent} />
      <Stack.Screen name="SignUp" component={SignUpComponent} />
      <Stack.Screen name="Home" component={HomeComponent} />
      <Stack.Screen name="ProductDetail" component={ProductDetailComponent} />
      
    </Stack.Navigator>
  );
}