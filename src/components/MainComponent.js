import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute'
import { AuthProvider } from '../contexts/AuthContext'
import Dashboard from './Admin/Dashboard'
import Login from './Login/Login'
import Home from './Home'
import Header from './Header/Header'

export default function Main() {
    return (
     <Router>
         <AuthProvider>
             <Header />
         <Route exact path="/" component={Home} />
         <Route exact path="/login" component={Login} />
         <PrivateRoute exact path="/admin/dashboard" component={Dashboard} />
         <Route exact path="/admin/dashboard" component={Dashboard} />
        </AuthProvider>
     </Router>
    )
}
