import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThumbsUp } from 'lucide-react-native';

const ProjectCard = ({ project, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={styles.header}>
                <Text style={styles.title}>{project.title}</Text>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{project.tags[0]}</Text>
                </View>
            </View>

            <Text style={styles.description} numberOfLines={2}>
                {project.description}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.author}>By {project.author}</Text>
                <View style={styles.stats}>
                    <View style={styles.stat}>
                        <ThumbsUp size={14} color="#64748b" />
                        <Text style={styles.statText}>{project.upvotes}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1e293b',
        flex: 1,
        marginRight: 8,
    },
    badge: {
        backgroundColor: '#e0e7ff',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    badgeText: {
        color: '#6366f1',
        fontSize: 12,
        fontWeight: '600',
    },
    description: {
        fontSize: 14,
        color: '#64748b',
        lineHeight: 20,
        marginBottom: 16,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#f1f5f9',
        paddingTop: 12,
    },
    author: {
        fontSize: 12,
        color: '#94a3b8',
    },
    stats: {
        flexDirection: 'row',
        gap: 12,
    },
    stat: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    statText: {
        fontSize: 12,
        color: '#64748b',
    },
});

export default ProjectCard;
