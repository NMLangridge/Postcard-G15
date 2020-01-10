import React from 'react';
import { StyleSheet, FlatList, Text, TextInput, ScrollView, View, TouchableOpacity } from 'react-native';

export default class GigForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      venue: '',
      serviceType: '',
      bandProfile: '',
      date: '',
      time: ''
    }

  }

  render() {
    return (
      <View style={styles.screenContainer}>
        <View>
          <Text style={styles.title}>MAKE A REQUEST</Text>
        </View>
        <ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Venue"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Service Type"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Band Profile"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Date"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Time"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    padding: 50,
    paddingTop: 10
  },
  inputContainer: {
    flexDirection: 'column',
    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#171717',
    shadowOpacity: 0.1,
    backgroundColor: '#0b1424',
  },
  textInput: {
    backgroundColor: 'lavender',
    flex: 1,
    fontSize: 14,
    height: 35,
    borderWidth: 1,
    paddingLeft: 5,
  },
  title: {
    alignItems: 'center',
    fontSize: 26,
    paddingTop: 10,
    paddingBottom: 10,
    color: 'orange',
    textTransform: 'uppercase'
  }
});
