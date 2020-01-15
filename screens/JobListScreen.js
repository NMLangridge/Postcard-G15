import React from 'react';
import { StyleSheet, FlatList, Text, View, Button, TouchableOpacity } from 'react-native';
import JobItem from '../components/JobItem';

class NotificationsScreen extends React.Component {

  static navigationOptions = {
    title: 'Postcard - JobList',
  };

  constructor(props) {
    super(props)
    this.state = {
      jobs: [
        {id: 0, dateTime: "Friday 15th Nov, 8pm", venue: "King Tuts", artist: "Kyle's One Man Band", serviceType: "Promo"},
        {id: 1, dateTime: "Friday 7th Feb, 8pm", venue: "Flying Duck", artist: "Pandacar", serviceType: "Production"}
      ]
    }
    this.removeFromList = this.removeFromList.bind(this);
  }

  removeFromList(item) {
    let jobs = this.state.jobs;

    jobs = jobs.filter((job) => job.id !== item.id);

    this.setState({ jobs });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Job List</Text>
        <FlatList
          style={styles.list}
          data={this.state.jobs}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return(
              <JobItem jobItem={item} removeJob={() => this.removeFromList(item)} />
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
