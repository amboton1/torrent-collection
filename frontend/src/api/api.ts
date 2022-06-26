import axios from "axios";

export const getAllResults = async () => {
  const fetchedMovies = await axios.get('/list_movies.json');

  const { data } = fetchedMovies.data;
  
  return data;
}

export const getResultsBySearchTerm = async (queryTerm: string) => {
  const filteredMovies = await axios.get(`/list_movies.json?query_term=${queryTerm}`);

  const { data } = filteredMovies.data;

  return data;
}