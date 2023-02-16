import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView,TextInput, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function CreateLead() {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [loanType, setLoanType] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [residentialAddress, setResidentialAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [branch, setBranch] = useState('');

  return (
    <ScrollView style={styles.container}>

    {/* for personal details */}

      <Text style={styles.heading}>Personal Details</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={fullName}
          onChangeText={setFullName}
          placeholder="Full Name"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={mobileNumber}
          onChangeText={setMobileNumber}
          placeholder="Mobile Number (Whatsapp)"
        />
      </View>
      
       {/* for Loan details */}

      <Text style={styles.heading}>Loan Details</Text>
      <View style={styles.field}>
    <Text style={styles.label}>Loan Type</Text>
    <Picker
      selectedValue={loanType}
      onValueChange={(itemValue, itemIndex) => setLoanType(itemValue)}>
      <Picker.Item label="Choose loan type" value="" />
      <Picker.Item label="Vehicle loan" value="vehicle" />
      <Picker.Item label="Education loan" value="education" />
      <Picker.Item label="Home loan" value="home" />
      <Picker.Item label="Business loan" value="business" />
      <Picker.Item label="Personal loan" value="personal" />
      <Picker.Item label="Medical loan" value="medical" />
      <Picker.Item label="Loan Against Property" value="Property" />
      <Picker.Item label="School Fee loan" value="School fee" />
      <Picker.Item label="Teacher loan" value="teacher" />
      <Picker.Item label="Gold loan" value="gold" />
      <Picker.Item label="Micro loan" value="micro" />
      <Picker.Item label="Solar Panel loan" value="solar panel" />
      <Picker.Item label="Marriage loan" value="marriage" />
      <Picker.Item label="Consumer Durable loan" value="consumer" />
    </Picker>
  </View>
  <View style={styles.field}>
    <Text style={styles.label}>Loan Amount</Text>
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      placeholder="Enter loan amount"
      value={loanAmount}
      onChangeText={(text) => setLoanAmount(text)}
    />
  </View>
     
      {/* for Branch details */}

     <Text style={styles.heading}>Residential and Branch Details</Text>
     <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={state}
          onChangeText={setState}
          placeholder="State"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={city}
          onChangeText={setCity}
          placeholder="City"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={postalCode}
          onChangeText={setPostalCode}
          placeholder="Postal Code"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={branch}
          onChangeText={setBranch}
          placeholder="Branch"
        />
      </View>
      
      
      <Button title="Submit" onPress={() => console.log('Form submitted')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  field: {
    marginBottom: 16,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateLead;
