import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
}

export const createUser = (req, res) => {
  const user = req.body;

  const userId = uuidv4(); 
  const userWithID = { ...user, id: userId };

  users.push(userWithID);

  res.send(`User with name ${user.firstname} ${user.lastname} added to the database `);
}

export const getUserDetails = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  
  res.send(foundUser);
}

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id != id);
  
  res.send(`User with the id ${id} removed from the database`);
}

export const updateUser = (req, res) => {
  const { id } = req.params;
  const {firstname, lastname, age, profession} = req.body;
  
  const user = users.find((user) => user.id == id);
  
  if(firstname) user.firstname = firstname;
  if(lastname) user.lastname = lastname;
  if(age) user.age = age;
  if(profession) user.profession = profession;

  res.send(`User with the id ${id} has been updated in the database`);
}