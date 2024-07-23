import { useEffect } from 'react';
import { Navigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const user =localStorage.getItem('userState')
  useEffect(() => {
    toast.success('Login successful...!');
  }, []);

  return (
    <div>
      <div>
        {!user && (<Navigate to='/login' replace={true} />)}
        {user && (<div>Dashboard</div>)}
      </div>
      <ToastContainer position="top-right" autoClose={2000} theme="dark" draggable='true' />
    </div>
  )
}

export default Dashboard