import { getMovies } from '../db/db.js';

export const resolvers = {
  Query: {
    movies: (_, { limit }) => getMovies(limit),
  },
};
