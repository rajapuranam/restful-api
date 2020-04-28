const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const keys = require('./keys');

const app = express();

const PORT = process.env.PORT || 3000;

// middlewares
app.use(bodyParser.json());
app.use(cors());
app.use('/posts', require('./routes/posts'));

// mongoDb connection
mongoose.connect(keys.mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if(err) return;
    console.log("Database connected!!");
});


// routes
app.get('/', (req, res) => {
    res.send('HELLO world');
});

// listen to server
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});