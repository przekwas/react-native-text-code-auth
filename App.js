import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {

  componentDidMount() {
    const config = {
      apiKey: "AIzaSyA3CHpO8WPvBja4u00HoJY3VhMJJ0G2Z88",
      authDomain: "one-time-password-7ab66.firebaseapp.com",
      databaseURL: "https://one-time-password-7ab66.firebaseio.com",
      projectId: "one-time-password-7ab66",
      storageBucket: "one-time-password-7ab66.appspot.com",
      messagingSenderId: "548437492355"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
