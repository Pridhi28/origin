import React, { useState } from "react";
import { TextInput, View, Button, Text, StyleSheet } from "react-native";
import axios from "axios";
import { Image } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from './components/DashboardScreen';
import 'react-native-gesture-handler';
const Stack = createStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
  },
  errorText: {
    color: "red",
  },
  button: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "orange",
    backgroundColor: 'orange',
    borderRadius: 5,
    padding: 10,
  },
});
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);  const validate = () => {
    if (!email || !password) {
      setError("Please fill in both email and password.");
      return false;
    }
    return true;
  };  const handleSubmit = () => {
    if (!validate()) {
      return;
    }    axios.get("https://reqres.in/api/login", {
      params: {
        email,
        password,
      },
    })
      .then(function (response) {
        setEmail(response.data.data);
        setPassword(response.data.data);
        console.log(response);
        navigation.navigate('Dashboard')
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <Image source={require("./assets/logo.png")} 
      style={{width: 250,height: 35}}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <View style={styles.button}><Button title="Login" color="white"onPress={handleSubmit} /></View>
      <View style={styles.button}><Button
        title="Signup" color="white" onPress={() => navigation.navigate('Signup')}
      /></View>
    </View>
  );
};const SignupScreen = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !phoneNumber || !password || !confirmPassword) {
      setError("All fields are required.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      // send sign up data to server
      setError(null);
    }
  };  return (
    <View style={styles.container}>
     <Text>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <View style={styles.button}><Button title="Sign Up" color="white" onPress={handleSubmit}/></View>
      <View style={styles.button}><Button title="Go to Login" color="white" onPress={() => navigation.navigate('Login')} /></View>
    </View>
  );
};
const Login = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Login;