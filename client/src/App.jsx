import {  Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Otpverification from './components/Otpverification';

function App() {

  const logState = localStorage.getItem('logstate')

  return (
    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={!logState ? <Login /> : <Navigate to="/dashboard" replace='true' />} />
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/otpverification' element={<Otpverification />} />
    </Routes>
  );
}

export default App;
