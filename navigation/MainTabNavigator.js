import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import BoxScreen from '../screens/BoxScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CounterScreen from '../screens/CounterScreen';
import ColorGeneratorScreen from '../screens/ColorGeneratorScreen';
import CustomColorScreen from '../screens/CustomColorScreen';
import CustomColorScreenReducer from '../screens/CustomColorScreenReducer';
import DisplayNameScreen from '../screens/DisplayNameScreen';
import StylingRulesScreen from '../screens/StylingRulesScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Counter: CounterScreen,
    ColorGenerator: ColorGeneratorScreen,
    CustomColor: CustomColorScreen,
    CustomColorReducer: CustomColorScreenReducer,
    DisplayName: DisplayNameScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const StylingStack = createStackNavigator(
  {
    BoxScreen: BoxScreen,
    StylingRules: StylingRulesScreen,
  },
  config
);

StylingStack.navigationOptions = {
  tabBarLabel: 'Styling',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

StylingStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  StylingStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
