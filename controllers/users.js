import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);
    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;
    users.push({...user, id: uuidv4()});
    res.send(`User [${user.firstname}] added to the database.`);
};

export const getUser = (req, res) => {
    const { id } = req.params;
    const found = users.find((user) => user.id === id);
    res.send(found);
};

export const deleteUser = (req, res) => { 
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`user with id ${req.params.id} has been deleted`)
    console.log(`user with id ${req.params.id} has been deleted`);
};

export const updateUser =  (req,res) => {
    const { id } = req.params;
    const { firstname, lastname, age } = req.body;
    const user = users.find((user) => user.id === id);
    if (firstname) user.firstname = firstname;
    if (lastname) user.lastname = lastname;
    if (age) user.age = age;
    res.send(`user with ${id} has been updated`);
    console.log(`user with ${id} has been updated`);
};