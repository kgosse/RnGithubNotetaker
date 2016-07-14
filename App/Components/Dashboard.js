import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native';
import Profile from "./Profile";

export default class Dashboard extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  _goToProfile = () => {
    this.props.navigator.push({
      component: Profile,
      title: 'Profile Page',
      passProps: {userInfo: this.props.userInfo}
    })
  };
  
  _goToNotes = () => {
    
  };
  
  _goToRepos = () => {
    
  };
  
  makeBackground(btn) {
    const obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    };
    
    if (btn === 0) {
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1) {
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }
    
    return obj;
  }
  
  
  render() {
    
    return (
      <View style={styles.container}>
        
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
        
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this._goToProfile}
          underlayColor="#88D4F5">
          <Text style={styles.buttonText}> View Profile </Text>
        </TouchableHighlight>
        
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this._goToRepos}
          underlayColor="#88D4F5">
          <Text style={styles.buttonText}> View Repos </Text>
        </TouchableHighlight>
        
        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this._goToNotes}
          underlayColor="#88D4F5">
          <Text style={styles.buttonText}> View Notes </Text>
        </TouchableHighlight>
      
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