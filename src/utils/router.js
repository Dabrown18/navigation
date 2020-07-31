import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import globals from '../lib/globals'

// Login Screens
import AgreementScreen from "../containers/AgreementScreen";
import OnBoardingScreen from "../containers/OnBoardingScreen";
import LoginScreen from "../containers/LoginScreen";
import ForgotPasswordScreen from "../containers/ForgotPasswordScreen";
import RegisterScreen from "../containers/RegisterScreen";
import CreatePasswordScreen from "../containers/CreatePasswordScreen";

// Home Tab Screens
import HomeScreen from "../containers/HomeScreen";

// Case Details Screen
import CaseDetailsScreen from "../containers/CaseDetailsScreen";

// Availability Tab Screen
import AvailabilityScreen from "../containers/AvailabilityScreen";
import WeeklyScheduleScreen from "../containers/WeeklyScheduleScreen";

// Available Cases Tab Screen
import AvailableCasesScreen from "../containers/AvailableCasesScreen";

// Profile Tab Screen
import ProfileScreen from "../containers/ProfileScreen";
import SettingsScreen from "../containers/SettingsScreen";

// Notifications Screen Tab Screen
import NotificationScreen from "../containers/NotificationScreen";

// Footer Tab Item Style
import FooterTabItem from '../components/FooterTabItem'

/**
 * Login stacks for screen navigation
 * Contains initial screens before login
  */
const AgreementLoginStack = createStackNavigator();
const AgreementLoginStackNavigator = () => {
  return (
    <AgreementLoginStack.Navigator headerMode="screen">
      <AgreementLoginStack.Screen name={'Agreement'} component={AgreementScreen} />
      <AgreementLoginStack.Screen name={'OnBoarding'} component={OnBoardingScreen} />
      <AgreementLoginStack.Screen name={'Register'} component={RegisterScreen} />
      <AgreementLoginStack.Screen name={'Login'} component={LoginScreen} />
      <AgreementLoginStack.Screen name={'CreatePassword'} component={CreatePasswordScreen} />
      <AgreementLoginStack.Screen name={'ForgotPassword'} component={ForgotPasswordScreen} />
    </AgreementLoginStack.Navigator>
  )
}

const LoginStack = createStackNavigator();
const LoginStackNavigator = () => {
  return (
    <LoginStack.Navigator headerMode="screen">
      <LoginStack.Screen name={'Login'} component={LoginScreen} />
      <LoginStack.Screen name={'CreatePassword'} component={CreatePasswordScreen} />
      <LoginStack.Screen name={'ForgotPassword'} component={ForgotPasswordScreen} />
      <LoginStack.Screen name={'Register'} component={RegisterScreen} />
    </LoginStack.Navigator>
  )
}

const HomeTab = createStackNavigator();
const HomeTabNavigator = () => {
  return (
    <HomeTab.Navigator headerMode="screen">
      <HomeTab.Screen name={'HomeScreen'} component={HomeScreen} />
      <HomeTab.Screen name={'CaseDetailsScreen'} component={CaseDetailsScreen} />
    </HomeTab.Navigator>
  )
}

const AvailabilityTab = createStackNavigator();
const AvailabilityTabNavigator = () => {
  return (
    <AvailabilityTab.Navigator headerMode="screen">
      <AvailabilityTab.Screen name={'AvailabilityScreen'} component={AvailabilityScreen} />
      <AvailabilityTab.Screen name={'WeeklyScheduleScreen'} component={WeeklyScheduleScreen} />
    </AvailabilityTab.Navigator>
  )
}

const AvailableCasesTab = createStackNavigator();
const AvailableCasesTabNavigator = () => {
  return (
    <AvailableCasesTab.Navigator headerMode="screen">
      <AvailabilityTab.Screen name={'AvailableCasesScreen'} component={AvailableCasesScreen} />
      <AvailabilityTab.Screen name={'CaseDetailsScreen'} component={CaseDetailsScreen} />
    </AvailableCasesTab.Navigator>
  )
}

const NotificationsTab = createStackNavigator();
const NotificationsTabNavigator = () => {
  return (
    <NotificationsTab.Navigator headerMode="screen">
      <NotificationsTab.Screen name={'NotificationScreen'} component={NotificationScreen} />
    </NotificationsTab.Navigator>
  )
}

const ProfileTab = createStackNavigator();
const ProfileTabNavigator = () => {
  return (
    <ProfileTab.Navigator headerMode="screen">
      <ProfileTab.Screen name={'ProfileScreen'} component={ProfileScreen} />
      <ProfileTab.Screen name={'SettingsScreen'} component={SettingsScreen} />
      <ProfileTab.Screen name={'AgreementScreen'} component={AgreementScreen} />
    </ProfileTab.Navigator>
  )
}

const DashboardTab = createBottomTabNavigator();
const DashboardTabRoutes = () => {
  return (
    <DashboardTab.Navigator
      initialRouteName="HomeTab"
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        style: globals.INTEGER.footerTabBarHeight,
        paddingVertical: 5,
        backgroundColor: globals.COLOR.white,
      }}
    >
      <DashboardTab.Screen
        name={'HomeTab'}
        component={HomeTabNavigator}
        options={({navigation}) => {
          return {
            tabBarIcon: ({focused, horizontal, tintColor}) => {
              return <FooterTabItem tabBarIndex={0} isFocused={focused} />
            }
          }
        }}
      />
      <DashboardTab.Screen
        name={'AvailabilityTab'}
        component={AvailabilityTabNavigator}
        options={({navigation}) => {
          return {
            tabBarIcon: ({focused, horizontal, tintColor}) => {
              return <FooterTabItem tabBarIndex={1} isFocused={focused} />
            }
          }
        }}
      />
      <DashboardTab.Screen
        name={'AvailableCasesTab'}
        component={AvailableCasesTabNavigator}
        options={({navigation}) => {
          return {
            tabBarIcon: ({focused, horizontal, tintColor}) => {
              return <FooterTabItem tabBarIndex={2} isFocused={focused} />
            }
          }
        }}
      />
      <DashboardTab.Screen
        name={'NotificationsTab'}
        component={NotificationsTabNavigator}
        options={({navigation}) => {
          return {
            tabBarIcon: ({focused, horizontal, tintColor}) => {
              return <FooterTabItem tabBarIndex={3} isFocused={focused} isNotificationTab={true} />
            }
          }
        }}
      />
      <DashboardTab.Screen
        name={'ProfileTab'}
        component={ProfileTabNavigator}
        options={({navigation}) => {
          return {
            tabBarIcon: ({focused, horizontal, tintColor}) => {
              return <FooterTabItem tabBarIndex={4} isFocused={focused}/>
            }
          }
        }}
      />
    </DashboardTab.Navigator>
  )
}

export const AgreementLoginStack = () => {
  return (
    <NavigationContainer>
      <AgreementLoginStackNavigator />
    </NavigationContainer>
  )
}

export const LoginContainer = () => {
  return (
    <NavigationContainer>
      <LoginStackNavigator />
    </NavigationContainer>
  )
}

export const HomeContainer = () => {
  return (
    <NavigationContainer>
      <DashboardTabRoutes />
    </NavigationContainer>
  )
}