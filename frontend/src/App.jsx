import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Signup  from './pages/Signup';
import { Signin } from "./pages/Signin"
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          {/* <Route path="/signin" element={<Signin />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/send" element={<Send />} /> */}
        </Routes>

      </BrowserRouter>
      
    </div>
  )
}

export default App
