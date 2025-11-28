import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useProjects } from '../context/ProjectContext';
import { Plus, Check, X } from 'lucide-react-native';

const DashboardScreen = ({ navigation }) => {
    const { projects } = useProjects();
    const myProjects = projects.slice(0, 1); // Mock data

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>My Dashboard</Text>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>My Projects</Text>
                        <TouchableOpacity
                            style={styles.createButton}
                            onPress={() => navigation.navigate('CreateProject')}
                        >
                            <Plus size={20} color="#fff" />
                            <Text style={styles.createButtonText}>New Project</Text>
                        </TouchableOpacity>
                    </View>

                    {myProjects.map(project => (
                        <View key={project.id} style={styles.projectCard}>
                            <View style={styles.projectHeader}>
                                <Text style={styles.projectTitle}>{project.title}</Text>
                                <View style={styles.activeBadge}>
                                    <Text style={styles.activeBadgeText}>Active</Text>
                                </View>
                            </View>

                            <View style={styles.projectStats}>
                                <Text style={styles.statText}>{project.upvotes} Upvotes</Text>
                                <Text style={styles.statText}>{project.comments} Comments</Text>
                                <Text style={styles.statText}>3 Collaborators</Text>
                            </View>

                            <View style={styles.projectActions}>
                                <TouchableOpacity style={styles.actionButton}>
                                    <Text style={styles.actionButtonText}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.actionButton}
                                    onPress={() => navigation.navigate('ProjectDetails', { id: project.id })}
                                >
                                    <Text style={styles.actionButtonText}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Collaborator Requests</Text>

                    <View style={styles.requestCard}>
                        <View style={styles.requestHeader}>
                            <View style={styles.avatar} />
                            <View style={styles.requestInfo}>
                                <Text style={styles.requesterName}>Alice Wonder</Text>
                                <Text style={styles.requestText}>Wants to join <Text style={{ fontWeight: 'bold' }}>EcoTrack</Text></Text>
                            </View>
                        </View>
                        <View style={styles.requestActions}>
                            <TouchableOpacity style={[styles.requestButton, { backgroundColor: '#22c55e' }]}>
                                <Check size={20} color="#fff" />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.requestButton, { backgroundColor: '#ef4444' }]}>
                                <X size={20} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.requestCard}>
                        <View style={styles.requestHeader}>
                            <View style={styles.avatar} />
                            <View style={styles.requestInfo}>
                                <Text style={styles.requesterName}>Bob Builder</Text>
                                <Text style={styles.requestText}>Wants to join <Text style={{ fontWeight: 'bold' }}>EcoTrack</Text></Text>
                            </View>
                        </View>
                        <View style={styles.requestActions}>
                            <TouchableOpacity style={[styles.requestButton, { backgroundColor: '#22c55e' }]}>
                                <Check size={20} color="#fff" />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.requestButton, { backgroundColor: '#ef4444' }]}>
                                <X size={20} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>
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
    },
    section: {
        marginBottom: 32,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 16,
    },
    createButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#6366f1',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        gap: 4,
    },
    createButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    projectCard: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    projectHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    projectTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1e293b',
    },
    activeBadge: {
        backgroundColor: '#dcfce7',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    activeBadgeText: {
        color: '#166534',
        fontSize: 12,
        fontWeight: 'bold',
    },
    projectStats: {
        flexDirection: 'row',
        gap: 16,
        marginBottom: 16,
    },
    statText: {
        fontSize: 14,
        color: '#64748b',
    },
    projectActions: {
        flexDirection: 'row',
        gap: 8,
    },
    actionButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },
    actionButtonText: {
        color: '#475569',
        fontWeight: '600',
    },
    requestCard: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    requestHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        flex: 1,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#e2e8f0',
    },
    requestInfo: {
        flex: 1,
    },
    requesterName: {
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 2,
    },
    requestText: {
        fontSize: 14,
        color: '#64748b',
    },
    requestActions: {
        flexDirection: 'row',
        gap: 8,
    },
    requestButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default DashboardScreen;
