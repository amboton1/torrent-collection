import React, { useState } from "react";
import Modal from "../components/Modal.tsx";
import Spinner from "../components/Spinner.tsx";

type DashboardProps = {
  movies: MovieList,
  user: Record<string,string>,
  isSpinnerLoading: boolean
};

type MovieList = {
  movies: {
    large_cover_image: string,
    title: string
  }[],  
}

const Dashboard = ({movies, user, isSpinnerLoading}: DashboardProps) => {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  const [movieInfo, setMovieInfo] = useState({});

  const openMovieModal = (element: Record<string, string>) => {
    setIsModalOpen(true);
    setMovieInfo(element);
  }

  const renderListOfMovies = (moviesList: MovieList) => {
    return moviesList?.movies.map((element, index) => {
      return (
        <div key={index} className="hover:brightness-50 relative transition cursor-pointer duration-500 hover:scale-105">
          <div onClick={() => openMovieModal(element)} className="absolute inset-0 z-10 flex justify-center items-center opacity-0 hover:opacity-100 duration-500">
            <svg className="h-24 w-24 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
          </div>
          <img src={element?.large_cover_image} alt={element?.title} />
        </div>
      );
    });
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-5">{`Welcome, ${user?.name}`}</h1>
      {isSpinnerLoading && <Spinner />}
      <section className="pb-5">
        <div className="grid grid-cols-4 gap-4 px-5">
          {renderListOfMovies(movies)}
          {isModalOpen && <Modal movieInfo={movieInfo} setIsModalOpen={setIsModalOpen} />}
        </div>
      </section>
    </div>
  )
}

export default Dashboard;