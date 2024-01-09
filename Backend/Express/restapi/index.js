const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json');

const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({extended: true}));

// Importing the routes
app
  .route('/api/users/id:')
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    res.json(user);
  })
  .patch((req, res) => {
    res.send({status: 'Panding'});
  })
  .delete((req, res) => {
    res.send({status: 'Panding'});
  });


// Importing the users
app.get('/users', (req, res) => {
  const html = `${users.map(user => `<li>${user.first_name}</li>`).join('')}`;
  res.send(html)
}); 

// Importing the REST API
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Importing the REST API with id
app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    res.json(user);
});

// Creating the new user
app.post('/api/users', (req, res) => {
  const body = req.body;
  users.push({...body, id: users.length + 1});
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    res.send({status: 'success', id: users.length});
  });
});

// Updating the user with id
app.patch('/api/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;
  const user = users.find(user => user.id === id);
  const index = users.indexOf(user);
  users[index] = {...user, ...body};
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    res.send({status: 'Updated', id: users.length});
  });
});

// Deleting the user with id
app.delete('/api/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(user => user.id === id);
  users.pop(user);
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    res.send({status: 'Deleted', id: users.length});
  });
});


app.listen(port, () => {
  console.log(`Server Started at port number:${port}`);
}); 