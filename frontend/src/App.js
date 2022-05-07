import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Register from './pages/Register';
import { UserContext } from './context/userContext';
import { useState } from 'react';
import Home from './components/Home';

function App() {
  const [user, setUser] = useState(null);
  const [loggedState, setLoggedState] = useState(null);

  return (
    <>
      <UserContext.Provider value={{ user, setUser, loggedState, setLoggedState }}>
        <Router>
          <div className="m-0 mx-auto text-center">
            <Header />
            <Routes>
              {
                user ? (
                  <Route path='/' element={<Dashboard />} />
                ) : (
                  <Route path='/' element={<Home />} />
                )
              }
              
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </div>
        </Router>
      </UserContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App;
