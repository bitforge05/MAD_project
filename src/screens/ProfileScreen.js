import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { Settings, LogOut, ChevronRight } from 'lucide-react-native';

const ProfileScreen = () => {
    const { user, logout } = useAuth();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{ uri: user?.avatar || 'https://via.placeholder.com/100' }}
                    style={styles.avatar}
                />
                <Text style={styles.name}>{user?.name || 'User Name'}</Text>
                <Text style={styles.email}>{user?.email || 'user@example.com'}</Text>
            </View>

            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem}>
                    <View style={styles.menuItemLeft}>
                        <Settings size={20} color="#64748b" />
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                    <ChevronRight size={20} color="#cbd5e1" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={logout}>
                    <View style={styles.menuItemLeft}>
                        <LogOut size={20} color="#ef4444" />
                        <Text style={[styles.menuItemText, { color: '#ef4444' }]}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },
    header: {
        backgroundColor: '#fff',
        padding: 32,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#e2e8f0',
        marginBottom: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 4,
    },
    email: {
        fontSize: 16,
        color: '#64748b',
    },
    menu: {
        marginTop: 24,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e2e8f0',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f5f9',
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    menuItemText: {
        fontSize: 16,
        color: '#1e293b',
        fontWeight: '500',
    },
});

export default ProfileScreen;
