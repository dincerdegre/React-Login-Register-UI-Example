import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Register from './components/Register/Register';
function App() {
  return (
   <div className="mainWrapper">
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Login />} />
       <Route index element={<Login />} path="login" />
       <Route element={<Register />} path="register" />
      <Route element={<ForgotPassword />} path="forgot-password" />
     </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
