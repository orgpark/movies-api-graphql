import fetch from 'node-fetch';
const API_URL = 'https://yts.mx/api/v2/list_movies.json?';

export const getMovies = (limit, year) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  console.log(REQUEST_URL);
  return fetch(`${REQUEST_URL}`)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};

export const getById = (id) => {
  return movies.filter((elem) => elem.id === id)[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
