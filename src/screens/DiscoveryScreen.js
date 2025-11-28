import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { useProjects } from '../context/ProjectContext';
import ProjectCard from '../components/ProjectCard';
import { Search } from 'lucide-react-native';

const DiscoveryScreen = ({ navigation }) => {
    const { projects } = useProjects();
    const [search, setSearch] = useState('');

    const filteredProjects = projects.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Discover Projects</Text>
                <View style={styles.searchContainer}>
                    <Search size={20} color="#94a3b8" />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search projects..."
                        value={search}
                        onChangeText={setSearch}
                    />
                </View>
            </View>

            <FlatList
                data={filteredProjects}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <ProjectCard
                        project={item}
                        onPress={() => navigation.navigate('ProjectDetails', { id: item.id })}
                    />
                )}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },
    header: {
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 16,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f5f9',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
        fontSize: 16,
        color: '#1e293b',
    },
    list: {
        padding: 16,
    },
});

export default DiscoveryScreen;
