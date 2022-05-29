const Dashboard = ({movies}) => {

  const renderListOfMovies = (moviesList) => {
    return moviesList?.movies.map(element => {
      return (
        <div className="overlay-div transition duration-500 hover:scale-105">
          <img src={element?.large_cover_image} alt={element.title} />
        </div>
      );
    });
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-5">Dashboard</h1>
      <section className="list-of-movies">
        <div className="grid grid-cols-4 gap-4 px-5">
          {renderListOfMovies(movies)}
        </div>
      </section>
    </div>
  )
}

export default Dashboard