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
import Repositories from './Repositories';
import api from '../Utils/api';
import Notes from "./Notes";

export default class Dashboard extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      isLoading: false
    };
  }
  
  _goToProfile = () => {
    this.props.navigator.push({
      component: Profile,
      title: 'Profile Page',
      passProps: {userInfo: this.props.userInfo}
    })
  };
  
  _goToNotes = () => {
    api.getNotes(this.props.userInfo.login)
      .then((jsonRes) => {
        jsonRes = jsonRes || {};
        this.props.navigator.push({
          component: Notes,
          title: 'Notes',
          passProps: {
            notes: jsonRes,
            userInfo: this.props.userInfo
          }
        });
      });
  };
  
  _goToRepos = () => {
    this.setState({
      isLoading: true
    });
    api.getRepos(this.props.userInfo.login)
      .then((res) => {
        this.setState({
          isLoading: false
        });
        this.props.navigator.push({
          component: Repositories,
          title: 'Repos Page',
          passProps: {
            userInfo: this.props.userInfo,
            repos: res
          }
        });
      });
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
    // const spinner = this.state.isLoading ? (<ActivityIndicatorIOS animating={true} color="#111" size="large" hidesWhenStopped={true}/>) : (<View></View>);
    
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
            <Text style={styles.buttonText}>
              View Repos
            </Text>
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
    flex: 1,
    justifyContent: 'center'
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