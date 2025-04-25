const users = [
  { id: 1, firstName: 'John', lastName: 'Doe' },
  { id: 2, firstName: 'Jane', lastName: 'Smith' }
];

const renamedUsers = users.map(user => ({
  userId: user.id,
  name: user.firstName,
  surname: user.lastName
}));

console.log(renamedUsers);