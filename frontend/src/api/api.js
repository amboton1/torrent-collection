import axios from "axios";

export const getAllResults = async () => {
  const fetchedMovies = await axios.get('/list_movies.json');

  const { data } = fetchedMovies.data;
  
  return data;
}