import React from 'react';
import { StyleSheet, FlatList, ScrollView, TextInput, Text, View, Button, TouchableOpacity, TouchableHighlight } from 'react-native';

class GigsScreen extends React.Component {

  static navigationOptions = {
    title: 'Postcard',
  };

  constructor(props) {
    super(props);
    this.state = {
      when: '',
      venue: '',
      bandProfile: '',
      serviceType: ''
    }
  }

  render() {

    const { navigate } = this.props.navigation;
    return (


      <ScrollView style={styles.inputContainer}>
        <View style={styles.screenContainer}>
          <Text style={styles.title}>MAKE A REQUEST</Text>
          <Text style={styles.basicText}>When:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(when) => {
              this.setState({ when })
            }}
            value={this.state.when}
            placeholder="Date"
          />
          <Text style={styles.basicText}>Venue:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(venue) => {
              this.setState({ venue })
            }}
            value={this.state.venue}
            placeholder="Venue"
          />
          <Text style={styles.basicText}>Artist:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(bandProfile) => {
              this.setState({ bandProfile })
            }}
            value={this.state.bandProfile}
            placeholder="Artist"
          />
          <Text style={styles.basicText}>Service Type:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(serviceType) => {
              this.setState({ serviceType })
            }}
            value={this.state.serviceType}
            placeholder="Service Type"
          />

          <TouchableHighlight>
            <Text style={styles.button}>SUBMIT REQUEST</Text>
          </TouchableHighlight>

        </View>
      </ScrollView>
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
  input: {
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
  },
  basicText: {
    color: '#e8effa',
    paddingBottom: 5,
  },
  biggerText: {
    color: '#e8effa',
    fontSize: 18,
    marginBottom: 5,
  },
  giglist: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  button: {
    color: '#000',
    textAlign: 'center',
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: 'orange',
    borderColor: 'orange',
    padding: 5,
  }
});

export default GigsScreen;
