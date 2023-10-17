import { useState } from 'react'
import React from 'react'
import './App.css'
import Login from './components/Login/Login'
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>

    
      {/* renderizado condicional de NavBar*/}



    <Routes>
<Route path='/'  element={<Login />}/>
<Route path='/home'  />
<Route path='/about' />
<Route path='/about' />
<Route path="/detail/:id"  />
        <Route path="*"  />
        <Route path="/favorites" />

    </Routes>

    
    </>
  )
}

export default App
