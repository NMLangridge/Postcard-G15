// Will show log in and sign up buttons.
import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, TouchableHighlight } from 'react-native';
import Login from './Login';
import { f, auth, firestore } from '../config/config.js';

class Access extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    //  this.updateApp = this.updateApp.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  loginUser = async (email, password) => {
    if (email !== '' && password !== '') {
      try {
        let user = await auth.signInWithEmailAndPassword(email, password)
      }
      catch (error) {
        alert(error.message);
      }
    } else {
      //If they are empty
      alert('Missing email or password');
    }
  }

  render() {
    if (!this.props.screenProps) {
      return 'Loading ...'
    }
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Log In To Postcard</Text>
        <Login
          textChangeEmail={email => this.setState({ email })}
          textChangePassword={password => this.setState({ password })}
          loginUser={this.loginUser}
          updateAppApp={this.props.screenProps} />
      </View>
    )
  };
}

//CSS section
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#0b1424',
  },
  title: {
    alignItems: 'center',
    fontSize: 26,
    paddingTop: 10,
    color: 'orange',
    textTransform: 'uppercase'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Access;
