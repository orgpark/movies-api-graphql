import { people, getById } from '../db/db.js';
export const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => {
      console.log(id);
      return getById(id);
    },
  },
};
