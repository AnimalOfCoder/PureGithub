/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { 
  Image, 
  View,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';


export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'home'
    }
  }
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          selectedTitleStyle={{color: 'red'}}
          title="主页"
          renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
          renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('./res/images/ic_polular.png')} />}
          badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <View style={styles.page1}></View>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          selectedTitleStyle={{color: 'red'}}
          title="趋势"
          renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')} />}
          renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('./res/images/ic_trending.png')} />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <View style={styles.page2}></View>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          selectedTitleStyle={{color: 'red'}}
          title="收藏"
          renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
          renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('./res/images/ic_polular.png')} />}
          badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <View style={styles.page1}></View>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          selectedTitleStyle={{color: 'red'}}
          title="我的"
          renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')} />}
          renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('./res/images/ic_trending.png')} />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <View style={styles.page2}></View>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  page1: {
    flex: 1,
    backgroundColor: 'red',
  },
  page2: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  image: {
    height: 22,
    width: 22
  }
});
