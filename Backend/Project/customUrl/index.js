const express = require('express');
const { connect } = require('./connect');
const urlRouter = require('./routes/url');

const app = express();
const port = 3001;

connect('mongodb://localhost:27017/url-shortener')
.then(() => console.log('Connected to MongoDB'));

app.use(express.json());
app.use("/url", urlRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));