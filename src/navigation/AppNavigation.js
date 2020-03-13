import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import React from 'react';

const getPlatformIcon = Platform.OS === 'ios' ? 'ios-' : 'md-';
