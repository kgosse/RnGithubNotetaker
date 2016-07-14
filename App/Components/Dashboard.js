import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native';

export default class Dashboard extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log('PROPS ', this.props);
    return (
      <View style={styles.container}>
        <Text>This is the dashboard</Text>
        <Text>{JSON.stringify(this.props.userInfo)}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});