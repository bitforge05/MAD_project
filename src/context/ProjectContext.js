import React, { createContext, useState, useContext } from 'react';

const ProjectContext = createContext();

export const useProjects = () => useContext(ProjectContext);

export const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: 'EcoTrack',
            description: 'A mobile app to track carbon footprint with gamification elements.',
            tags: ['Mobile', 'React Native', 'Green Tech'],
            author: 'Jane Doe',
            upvotes: 12,
            comments: 3
        },
        {
            id: 2,
            title: 'AI Study Buddy',
            description: 'An AI-powered study assistant that generates quizzes from notes.',
            tags: ['AI', 'Web', 'Education'],
            author: 'John Smith',
            upvotes: 25,
            comments: 8
        }
    ]);

    const addProject = (project) => {
        setProjects([...projects, { ...project, id: Date.now(), upvotes: 0, comments: 0 }]);
    };

    return (
        <ProjectContext.Provider value={{ projects, addProject }}>
            {children}
        </ProjectContext.Provider>
    );
};
