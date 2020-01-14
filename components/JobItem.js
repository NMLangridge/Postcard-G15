import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Button} from 'react-native';

export default class JobItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.basicText}>Artist</Text>
          <Text style={styles.biggerText}>Kyle's One Man Band</Text>
          <Text style={styles.basicText}>Venue</Text>
          <Text style={styles.biggerText}>King Tuts</Text>
          <Text style={styles.basicText}>Date/Time</Text>
          <Text style={styles.biggerText}>Friday 15th Nov, 8pm</Text>
          <TouchableOpacity style={styles.button}>
            <Text onPress={() => this.props.removeJob()}>MARK AS COMPLETE</Text>
          </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginBottom: 10
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
  button: {
    width: '100%',
    height: 30,
    color: '#000',
    backgroundColor: 'orange',
    marginTop: 10,
    padding: 5,
    alignItems: 'center'
  }
})
