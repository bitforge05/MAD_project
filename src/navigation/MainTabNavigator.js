import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, LayoutDashboard, User } from 'lucide-react-native';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let IconComponent;

                    if (route.name === 'Discovery') {
                        IconComponent = Home;
                    } else if (route.name === 'Dashboard') {
                        IconComponent = LayoutDashboard;
                    } else if (route.name === 'Profile') {
                        IconComponent = User;
                    }

                    return <IconComponent color={color} size={size} />;
                },
                tabBarActiveTintColor: '#6366f1',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Discovery" component={DiscoveryScreen} />
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default MainTabNavigator;
