require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require("./routes/userRouter")
const noteRouter = require("./routes/noteRouter")

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.json("Hello, this is my Notes App");
});


//routes setting
app.use('/users', userRouter);
app.use('/api/notes', noteRouter)

app.listen(PORT, () => {
    console.log('Server is running on localhost:', PORT);
});

// Mongoose connect cluster
const URI = process.env.MONGODB_URL;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
