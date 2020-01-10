import React from 'react';
import { StyleSheet, FlatList, ScrollView, TextInput, Text, View, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import GigForm from '../components/GigForm';
import { Dropdown } from 'react-native-material-dropdown';
import RadioButtons from '../components/RadioButtons.js';

class GigsScreen extends React.Component {

  static navigationOptions = {
    title: 'Postcard',
  };

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
    const { navigate } = this.props.navigation;
    return (

      // <View style={styles.container}>
      //   <Text style={styles.title}>Gigs</Text>
      //   <View style={styles.giglist}>
      //     <Text style={styles.basicText}>Venue</Text>
      //     <Text style={styles.biggerText}>King Tuts</Text>
      //     <Text style={styles.basicText}>Date/Time</Text>
      //     <Text style={styles.biggerText}>Friday 15th Nov, 8pm</Text>
      //   </View>
      //   <FlatList
      //     style={styles.giglist}
      //     keyExtractor={(item, index) => index.toString()}
      //     renderItem={ ({item, index}) => {
      //       return(
      //         <GigForm gigForm={item} />
      //       )
      //     }}
      //     >
      //   </FlatList>
      //
      // </View>

      <ScrollView style={styles.inputContainer}>
        <View style={styles.screenContainer}>
          <Text style={styles.title}>MAKE A REQUEST</Text>
          <Text style={styles.basicText}>Venue:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(venue) => {
              this.setState({ venue })
            }}
            value={this.state.venue}
            placeholder="Venue"
          />
          <Text style={styles.basicText}>Service Type:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(serviceType) => {
              this.setState({ serviceType })
            }}
            value={this.state.serviceType}
            placeholder="Live/Promo/Production"
          />
          <Text style={styles.basicText}>Band Profile:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(bandProfile) => {
              this.setState({ bandProfile })
            }}
            value={this.state.bandProfile}
            placeholder="Band Profile"
          />
          <Text style={styles.basicText}>Date:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(date) => {
              this.setState({ date })
            }}
            value={this.state.date}
            placeholder="Date"
          />
          <Text style={styles.basicText}>Time:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(time) => {
              this.setState({ time })
            }}
            value={this.state.time}
            placeholder="Time"
          />

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#0b1424',
    padding: 10,
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
  }
});

export default GigsScreen;
