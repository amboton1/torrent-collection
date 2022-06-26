import React from 'react';
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
import Search from './components/Search.tsx';
import { getResultsBySearchTerm } from './api/api.ts';

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
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [filteredMovieQuery, setFilteredMovieQuery] = useState('');
  const [isSpinnerLoading, setIsSpinnerLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, { movies: null });
  const userCookie = localStorage.getItem('user');

  useEffect(() => {
    if (userCookie) {
      setIsSpinnerLoading(true);
      getAllResults().then((movies: Record<string, string>) => {
        dispatch({ type: 'fetchMovies', payload: movies });
      }).then(() => {
        setIsSpinnerLoading(false);
      })

      setIsSignedIn(true);
    }
  }, [user])

  useEffect(() => {
    const getSearchResults = async (filteredMovieQuery: string) => {
      const searchResults = await getResultsBySearchTerm(filteredMovieQuery);

      dispatch({ type: 'fetchMovies', payload: searchResults })
    }

    if (filteredMovieQuery) {
      getSearchResults(filteredMovieQuery).then(() => setIsSpinnerLoading(false));
    }
  }, [filteredMovieQuery])

  const renderRoute = () => {
    return isSignedIn ? (
      <Route path='/' element={<Dashboard movies={state.movies} isSpinnerLoading={isSpinnerLoading} user={JSON.parse(userCookie as string)} />} />
    ) : (
      <Route path='/' element={<Home />} />
    )
  }

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <main className="m-0 mx-auto text-center">
            <Header isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}>
              <Search setFilteredMovieQuery={setFilteredMovieQuery} setIsSpinnerLoading={setIsSpinnerLoading} />
            </Header>
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
