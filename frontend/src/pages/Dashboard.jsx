const Dashboard = ({movies, user}) => {
  const renderListOfMovies = (moviesList) => {
    return moviesList?.movies.map((element, index) => {
      return (
        <div key={index} className="hover:brightness-50 relative transition cursor-pointer duration-500 hover:scale-105">
          <div className="opacity-0 hover:opacity-100 duration-500">
            <button class="mb-20 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold">Get Details!</button>
            <a href="fff" class="absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold">Download</a>
          </div>
          <img src={element?.large_cover_image} alt={element.title} />
        </div>
      );
    });
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-5">{`Welcome, ${user?.name}`}</h1>
      <section className="pb-5">
        <div className="grid grid-cols-4 gap-4 px-5">
          {renderListOfMovies(movies)}
        </div>
      </section>
    </div>
  )
}

export default Dashboard;