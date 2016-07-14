import React from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native';


export default class Main extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    };
  }
  
  _handleChange(event) {
    this.setState({
      username: event.nativeEvent.text
    });
  }
  
  _handleSubmit() {
    this.setState({
      isLoading: true
    });
    console.log('SUBMIT ', this.state.username);
  };
  
  render() {
    return(
      <View style={styles.mainContainer}>
        <Text style={styles.title}> Search for a Github User </Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.username}
          onChange={this._handleChange.bind(this)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this._handleSubmit.bind(this)}
          underlayColor="white"
        >
          <Text style={styles.buttonText}> Search </Text>
        </TouchableHighlight>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});