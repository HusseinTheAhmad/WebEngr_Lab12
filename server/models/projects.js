const mongoose = require("mongoose")

// creating schema
const projectsSchema = new mongoose.Schema({
    pid: String,
    desc: String
})

// creating model using created schema, needs (table, schema)
const ProjectsModel = mongoose.model("projects", projectsSchema)

// Exporting
module.exports = ProjectsModel