import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../context/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import MainTabNavigator from './MainTabNavigator';
import CreateProjectScreen from '../screens/CreateProjectScreen';
import ProjectDetailsScreen from '../screens/ProjectDetailsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const { user } = useAuth();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {user ? (
                    <>
                        <Stack.Screen name="Main" component={MainTabNavigator} />
                        <Stack.Screen name="CreateProject" component={CreateProjectScreen} options={{ headerShown: true, title: 'Create Project' }} />
                        <Stack.Screen name="ProjectDetails" component={ProjectDetailsScreen} options={{ headerShown: true, title: 'Project Details' }} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Signup" component={SignupScreen} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
