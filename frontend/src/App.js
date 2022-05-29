import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Register from './pages/Register';
import { UserContext } from './context/userContext';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import { getAllResults } from './api/api';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedState, setLoggedState] = useState(false);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const userCookie = localStorage.getItem('user');

    if (userCookie) {
      getAllResults().then(movies => {
        setMovies(movies);
      });

      setUser(userCookie);
      setLoggedState(true);
    }
  }, [user])

  const renderRoute = () => {
    return loggedState ? (
      <Route path='/' element={<Dashboard movies={movies} user={JSON.parse(user)} />} />
    ) : (
      <Route path='/' element={<Home />} />
    )
  }

  return (
    <>
      <UserContext.Provider value={{ user, setUser, loggedState, setLoggedState }}>
        <Router>
          <div className="m-0 mx-auto text-center">
            <Header />
            <Routes>
              {renderRoute()}
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
