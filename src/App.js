import React from 'react';
import './App.css';
import { BrowserRouter as Router, 
  Routes, 
  Route,
  Navigate } from 'react-router-dom';

import { Home } from './pages';
import { Dashboard, TOS, Privacy } from './pages';


export const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/TOS' element={<TOS/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<Navigate to ="/"/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App