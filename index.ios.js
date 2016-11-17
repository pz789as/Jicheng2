/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  AppState,
} from 'react-native';

import codePush from 'react-native-code-push';

import TestView from './TestView';
import TestText from './TestText';

class Jicheng2 extends Component {
  componentDidMount(){
    // codePush.checkForUpdate()
    // .then((update)=>{
    //   console.log('aaa', update);
    // });
    // AppState.addEventListener('change', (newState)=>{
    //   newState === 'active' && codePush.sync();
    // });
    codePush.sync({updateDialog:true,installMode:codePush.InstallMode.IMMEDIATE});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          修改了文字
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <TestView text={'React Native入门及实践'}/>
        <TestView text={'再次更改'}/>
        <TestText text={'下面换成图片看看'}/>
        <Image source={require('./res/header-icon.png')}
            resizeMode={'contain'}
            style={{width:100,height:200}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Jicheng2', () => Jicheng2);
