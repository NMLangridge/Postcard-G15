import React from 'react';
import { StyleSheet, FlatList, ScrollView, TextInput, Text, View, Button, TouchableOpacity } from 'react-native';
import GigForm from '../components/GigForm';


class GigsScreen extends React.Component {

  static navigationOptions = {
    title: 'Postcard',
  };
  render() {
    const {navigate} = this.props.navigation;
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

      <View style={styles.screenContainer}>
        <View>
          <Text style={styles.title}>MAKE A REQUEST</Text>
        </View>
        <ScrollView style={styles.inputContainer}>
          <View style={styles.screenContainer}>
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
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#0b1424',
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'column',
    shadowOffset: {width: 0, height: 3},
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
    fontSize: 12,
    textTransform: 'uppercase',
    color: 'orange'
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
})

export default GigsScreen;
