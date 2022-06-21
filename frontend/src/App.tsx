import React, { SetStateAction } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Dashboard from './pages/Dashboard.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import { UserContext } from './context/userContext.ts';
import { useEffect, useReducer, useState } from 'react';
import Home from './components/Home.tsx';
import { getAllResults } from './api/api.ts';

type MovieActionType = {
  type: string,
  payload: any
}

const reducer = (state: Record<string, string>, action: MovieActionType) => {
  switch (action.type) {
    case 'fetchMovies':
      return { ...state, movies: action.payload }
    default:
      throw new Error();
  }
}

const App = () => {
  const [user, setUser] = useState<string>('');
  const [loggedState, setLoggedState] = useState(false);
  const [state, dispatch] = useReducer(reducer, { movies: null });

  useEffect(() => {
    const userCookie = localStorage.getItem('user');

    if (userCookie) {
      getAllResults().then(movies => {
        dispatch({ type: 'fetchMovies', payload: movies });
      });

      setUser(userCookie);
      setLoggedState(true);
    }
  }, [user])

  const renderRoute = () => {
    return loggedState ? (
      <Route path='/' element={<Dashboard movies={state.movies} user={JSON.parse(user)} />} />
    ) : (
      <Route path='/' element={<Home />} />
    )
  }

  return (
    <>
      <UserContext.Provider value={{ user, setUser, loggedState, setLoggedState }}>
        <Router>
          <main className="m-0 mx-auto text-center">
            <Header />
            <Routes>
              {renderRoute()}
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </main>
        </Router>
      </UserContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App;
