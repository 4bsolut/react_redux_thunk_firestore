import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import GuardedRoute from './guard/GuardedRoute';
import InnerPagesRoutes from './guard/InnerPagesRoutes';
import './style.css';

export default function App() {
  return (
    <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<GuardedRoute><Dashboard /></GuardedRoute>} />
            <Route path="/project/:id" element={<GuardedRoute><ProjectDetails /></GuardedRoute>} />
            <Route path="/signin" element={<InnerPagesRoutes><SignIn /></InnerPagesRoutes>} />
            <Route path="/signup" element={<InnerPagesRoutes><SignUp /></InnerPagesRoutes>} />
            <Route path="/create"   element={<GuardedRoute> <CreateProject /> </GuardedRoute>} />
          </Routes>
        </div>
    </Router>
  );
}
//