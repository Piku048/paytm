import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import {Signup} from ("./pages/Signup")
import {Signin} from ("./pages/Signin")
function App() {

  return (
    <div>
        <BrowserRouter>
           <Routes path="/signup" element={<Signup/>}/>
           <Routes path="/signin" element={<Signin/>}/>
           <Routes path="/dashboard" element={<Dashboard/>}/>
           <Routes path="/send" element={<Send/>}/>
            <Route/>
           
        </BrowserRouter>
    </div>
  )
}

export default App
