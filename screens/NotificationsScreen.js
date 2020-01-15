import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import NotificationItem from '../components/NotificationItem';

class NotificationsScreen extends React.Component {

  static navigationOptions = {
    title: 'Postcard - Notifications',
  };

  constructor(props) {
    super(props)
    this.state = {
      notifications: [
        {id: 0, dateTime: 'Now', venue: 'King Tuts', artist: 'James Hawthorne', serviceType: 'Live'},
        {id: 1, dateTime: 'January 1st, 2020, 7pm', venue: 'ABC', artist: 'Ruby Riot', serviceType: 'Promo' },
        {id: 2, dateTime: 'Februrary 10th, 2020, 8pm', venue: 'SECC', artist: 'Aaron Carter', serviceType: 'Production' }
      ]
    }
    this.removeFromList = this.removeFromList.bind(this);
  }

  removeFromList(item) {
    let notifications = this.state.notifications;

    notifications = notifications.filter((notification) => notification.id !== item.id);

    this.setState({ notifications });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Notifications</Text>
        <FlatList
          style={styles.list}
          data={this.state.notifications}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <NotificationItem notificationItem={item} removeNotification={() => this.removeFromList(item)}/>
            )
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#0b1424',
    padding: 10
  },
  title: {
    alignItems: 'center',
    fontSize: 26,
    paddingTop: 10,
    paddingBottom: 10,
    color: 'orange',
    textTransform: 'uppercase'
  },
  list: {
    width: '100%',
  }
})

export default NotificationsScreen;
