import React, { useState } from 'react';
import { View, Text, TextInput,Button, StyleSheet, FlatList, TouchableOpacity,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TaskManager from '../Tasks/TaskManager';
import {LinearGradient} from 'expo-linear-gradient';
import CreateLead from '../Leads/CreateLead';
import InviteCustomer from '../Invite/InviteCustomer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DashboardScreen = ({ navigation }) => (
    <View style={styles.container}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LinearGradient colors={['#765BBA', '#BDB2DA']} start={[0, 0]} end={[1, 0]} style={[styles.card, styles.newLeads, { width: 300, height: 100 }]}>
        <Text style={styles.cardText}>New Leads</Text>
        <Text style={[styles.cardText, styles.newLeadsCount]}>248 New Leads</Text>
        <Image style={[styles.cardImage,styles.newleadsImage]} source={require('../assets/newleads.png')} />
        <Image style={[styles.cardbubbleImage,styles.bubbleImage]} source={require('../assets/bubble.png')} />
        </LinearGradient>
        <LinearGradient colors={['#E5A45F', '#F9CB9C']} start={[0, 0]} end={[1, 0]} style={[styles.card, styles.allApplications, { width: 300, height: 100 }]}>
        <Text style={styles.cardText}>All Applications</Text>
        <Text style={[styles.cardText, styles.application]}>387 Applications</Text>
        <Image style={[styles.cardImage,styles.applicationImage]} source={require('../assets/application.png')} />
        <Image style={[styles.cardbubbleImage,styles.bubbleImage]} source={require('../assets/bubble.png')} />
      </LinearGradient>
      <LinearGradient colors={['#96C6F2', '#3EA09A']} start={[0, 0]} end={[1, 0]}style={[styles.card, styles.underProgress, { width: 300, height: 100 }]}>
        <Text style={styles.cardText}>Under Process</Text>
        <Text style={[styles.cardText, styles.process]}>10 In Process</Text>
        <Image style={[styles.cardImage,styles.processImage]} source={require('../assets/process.png')} />
        <Image style={[styles.cardbubbleImage,styles.bubbleImage]} source={require('../assets/bubble.png')} />
      </LinearGradient>
      <LinearGradient colors={['#45E245', '#91E391']} start={[0, 0]} end={[1, 0]} style={[styles.card, styles.sanctioned, { width: 300, height: 100 }]}>
        <Text style={styles.cardText}>Sanctioned</Text>
        <Text style={[styles.cardText, styles.sanc]}>2 Sanctioned</Text>
        <Image style={[styles.cardImage,styles.sancImage]} source={require('../assets/sanctioned.png')} />
        <Image style={[styles.cardbubbleImage,styles.bubbleImage]} source={require('../assets/bubble.png')} />
      </LinearGradient>
    </View>
  </View>
  );
const DrawerContent = ({navigation}) => {
    return (
            <View style={styles.button}>
            <Button title="Task Manager" color="black" onPress={() => navigation.navigate('TaskManager')} />
            <Button title="Create Lead" color="black" onPress={() => navigation.navigate('CreateLead')} />
            <Button title="Invite Customer" color="black" onPress={() => navigation.navigate('InviteCustomer')} />
            </View>
    );
};
const AppNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Dashboard" drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="Your Space" component={DashboardScreen} />
          <Drawer.Screen name="TaskManager" component={TaskManager} />
          <Drawer.Screen name="CreateLead" component={CreateLead} />
          
        </Drawer.Navigator>
      );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    taskListContainer: {
        width: '100%',
        marginTop: 20,
    },
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 10,
    },
    taskText: {
        fontSize: 18,
    },
    removeText: {
        fontSize: 18,
        color: 'red',
    },
    taskInputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 20,
    },
    taskInput: {
        width: '80%',
        padding: 10,
    },
    taskList: {
        width: '100%',
        marginTop: 20,
    },
    taskItem: {
        fontSize: 16,
        margin: 10,
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        margin: 10,
      },
      cardText: {
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        color: 'white',
        top: 10,
        left: 10,
      },
      newLeads: {
        backgroundColor: 'pink',
        fontSize: 24,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
      },
      allApplications: {
        backgroundColor: '#B7E038',
        position: 'absolute',
        top: 120,
        left: 0,
        right: 0,
      },
      underProgress: {
        backgroundColor: 'lightblue',
        
      },
      sanctioned: {
        backgroundColor:'#A7FFEB',
      },
      newLeadsCount: {
        fontSize: 22,
        textAlign: 'center',
        marginTop: 35,
      },
      application: {
        fontSize: 22,
        textAlign: 'center',
        marginTop: 35,
      },
      process: {
        fontSize: 22,
        textAlign: 'center',
        marginTop: 35,
      },
      sanc: {
        fontSize: 22,
        textAlign: 'center',
        marginTop: 35,
      },
      cardImage: {
        width: 40,
        height: 40,
        },
      cardbubbleImage: {
        width: 210,
        height: 100,
        },
      newleadsImage: {
        position: 'absolute',
        right: 10,
        width: 60,
        height: 50,
        marginBottom: 10,
      },
      applicationImage: {
        position: 'absolute',
        right: 20,
        width: 40,
        height: 50,
        marginBottom: 10,
      },
      processImage: {
        position: 'absolute',
        right: 20,
        width: 50,
        height: 50,
        marginBottom: 10,
      },
      sancImage: {
        position: 'absolute',
        right: 20,
        width: 45,
        height: 50,
        marginBottom: 10,
      },
      bubbleImage: {
        position: 'absolute',
        right:-90,
    
      },
});
export default AppNavigator;