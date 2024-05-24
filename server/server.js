const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Creating connection with our MongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/projectdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));

// Created model for Project database
const ProjectsModel = require('./models/projects');

// Endpoint to get all projects
app.get('/getProjects', (req, res) => {
    ProjectsModel.find()
        .then(projects => res.json(projects))
        .catch(err => res.json(err));
});

// Starting the server
app.listen(3001, () => console.log("Server is running on port 3001"));
