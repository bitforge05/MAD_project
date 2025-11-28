import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useProjects } from '../context/ProjectContext';
import { ThumbsUp, Users, ArrowLeft } from 'lucide-react-native';

const ProjectDetailsScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const { projects } = useProjects();
    const project = projects.find(p => p.id === id);

    const [upvotes, setUpvotes] = useState(project ? project.upvotes : 0);

    if (!project) return <View style={styles.container}><Text>Project not found</Text></View>;

    const handleUpvote = () => {
        setUpvotes(prev => prev + 1);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>{project.title}</Text>
                    <View style={styles.tags}>
                        {project.tags.map(tag => (
                            <View key={tag} style={styles.tag}>
                                <Text style={styles.tagText}>{tag}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>About the Project</Text>
                    <Text style={styles.description}>{project.description}</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Text style={styles.statLabel}>Upvotes</Text>
                        <Text style={styles.statValue}>{upvotes}</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statLabel}>Team Size</Text>
                        <Text style={styles.statValue}>3 / 5</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statLabel}>Status</Text>
                        <Text style={[styles.statValue, { color: '#22c55e' }]}>Active</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.upvoteButton} onPress={handleUpvote}>
                    <ThumbsUp size={20} color="#6366f1" />
                    <Text style={styles.upvoteButtonText}>Upvote Project</Text>
                </TouchableOpacity>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Join the Team</Text>
                    <Text style={styles.description}>Interested in contributing? Send a request to the project owner.</Text>
                    <TouchableOpacity style={styles.joinButton}>
                        <Text style={styles.joinButtonText}>Request to Join</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },
    content: {
        padding: 16,
    },
    header: {
        marginBottom: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 12,
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    tag: {
        backgroundColor: '#e0e7ff',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    tagText: {
        color: '#6366f1',
        fontWeight: '600',
        fontSize: 14,
    },
    section: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 12,
    },
    description: {
        fontSize: 16,
        color: '#475569',
        lineHeight: 24,
    },
    statsContainer: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 16,
    },
    statBox: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    statLabel: {
        fontSize: 12,
        color: '#64748b',
        marginBottom: 4,
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1e293b',
    },
    upvoteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#6366f1',
        marginBottom: 16,
        gap: 8,
    },
    upvoteButtonText: {
        color: '#6366f1',
        fontWeight: 'bold',
        fontSize: 16,
    },
    joinButton: {
        backgroundColor: '#6366f1',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    joinButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ProjectDetailsScreen;
