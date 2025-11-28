import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import { ProjectProvider } from './src/context/ProjectContext';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <AuthProvider>
      <ProjectProvider>
        <AppNavigator />
        <StatusBar style="auto" />
      </ProjectProvider>
    </AuthProvider>
  );
}
