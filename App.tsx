import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { NewOS } from './components/NewOS';
import { OSList } from './components/OSList';
import { OSDetails } from './components/OSDetails';
import { Login } from './components/Login';
import { isAuthenticated } from './services/auth';

function App() {
  const [auth, setAuth] = useState(isAuthenticated());

  useEffect(() => {
    const check = () => setAuth(isAuthenticated());
    window.addEventListener('storage', check);
    return () => window.removeEventListener('storage', check);
  }, []);

  if (!auth) {
    return <Login onLogin={() => setAuth(true)} />;
  }

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/nova-os" element={<NewOS />} />
          <Route path="/lista-os" element={<OSList />} />
          <Route path="/os/:id" element={<OSDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;