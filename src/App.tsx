import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { StudentDashboard } from './components/StudentDashboard';
import { CompanyDashboard } from './components/CompanyDashboard';
import { AdminPanel } from './components/AdminPanel';
import { AuthPage } from './components/AuthPage';

export type UserRole = 'student' | 'company' | 'admin' | null;
export type CurrentPage = 'landing' | 'student-dashboard' | 'company-dashboard' | 'admin-panel' | 'auth';

interface AppState {
  currentPage: CurrentPage;
  userRole: UserRole;
  isAuthenticated: boolean;
}

export default function App() {
  const [appState, setAppState] = useState<AppState>({
    currentPage: 'landing',
    userRole: null,
    isAuthenticated: false
  });

  const navigateTo = (page: CurrentPage, role?: UserRole) => {
    setAppState(prev => ({
      ...prev,
      currentPage: page,
      ...(role && { userRole: role })
    }));
  };

  const handleLogin = (role: UserRole) => {
    setAppState({
      currentPage: role === 'student' ? 'student-dashboard' : 
                   role === 'company' ? 'company-dashboard' : 'admin-panel',
      userRole: role,
      isAuthenticated: true
    });
  };

  const handleLogout = () => {
    setAppState({
      currentPage: 'landing',
      userRole: null,
      isAuthenticated: false
    });
  };

  const renderCurrentPage = () => {
    switch (appState.currentPage) {
      case 'landing':
        return <LandingPage onNavigate={navigateTo} />;
      case 'student-dashboard':
        return <StudentDashboard onLogout={handleLogout} />;
      case 'company-dashboard':
        return <CompanyDashboard onLogout={handleLogout} />;
      case 'admin-panel':
        return <AdminPanel onLogout={handleLogout} />;
      case 'auth':
        return <AuthPage onLogin={handleLogin} onBack={() => navigateTo('landing')} />;
      default:
        return <LandingPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderCurrentPage()}
    </div>
  );
}