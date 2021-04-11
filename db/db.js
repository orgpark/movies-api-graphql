export const people = [
  {
    id: '1',
    name: 'nono',
    age: 18,
    gender: 'female',
  },
  {
    id: '2',
    name: 'park',
    age: 18,
    gender: 'female',
  },
  {
    id: '3',
    name: 'kim',
    age: 18,
    gender: 'female',
  },
  {
    id: '4',
    name: 'Nicolas',
    age: 18,
    gender: 'female',
  },
  {
    id: '5',
    name: 'Nicolas',
    age: 18,
    gender: 'female',
  },
];

export const getById = (id) => {
  return people.filter((elem) => elem.id === String(id))[0];
};
