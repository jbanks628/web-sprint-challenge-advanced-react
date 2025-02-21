import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import AppClass from './components/AppClass'
import AppFunctional from './components/AppFunctional'
import './styles/reset.css'
import './styles/styles.css'

render(
  <BrowserRouter>
    <React.StrictMode>
      <h1>Welcome to the GRID</h1>
      <nav>
        <NavLink to="/">Functional</NavLink>
        <NavLink to="/class-based">Class-Based</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<AppFunctional className="functional" />} />
        <Route path="class-based" element={<AppClass className="class-based" />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
  , document.getElementById('root')
)
