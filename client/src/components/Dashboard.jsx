import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const { email } = location.state;
  
  useEffect(() => {
    const checkVs = async () => {
      try {
        const response = await axios.post('http://localhost:3000/Dashboard', {
          email,
        });
        if (!email) {
          navigate('/login', { replace: true })
          return;
        }
        if (response.data === 'backend accepts') {
          toast.success('Login successful...!');
        }
      } catch (error) {
        console.log(error);
        toast.error('Internal server error');
      }
    };
    checkVs();
  }, [navigate, email]);

  return (
    <div>
      <div>Dashboard</div>
      <ToastContainer position="top-right" autoClose={2000} theme="dark" draggable />
    </div>
  );
}

export default Dashboard;
