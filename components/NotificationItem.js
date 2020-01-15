import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const notif = this.props.notificationItem;

    return (
      <View style={styles.container}>
        <Text style={styles.basicText}>When</Text>
        <Text style={styles.biggerText}>{notif.dateTime}</Text>
        <Text style={styles.basicText}>Venue</Text>
        <Text style={styles.biggerText}>{notif.venue}</Text>
        <Text style={styles.basicText}>Artist</Text>
        <Text style={styles.biggerText}>{notif.artist}</Text>
        <Text style={styles.basicText}>Service Type</Text>
        <Text style={styles.biggerText}>{notif.serviceType}</Text>
        <TouchableOpacity style={styles.button}>
          <Text>ACCEPT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text onPress={() => this.props.removeNotification()}>REJECT</Text>
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
