const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    name: String,
    description: String,
    linkWebSite: String,
});

const Project = mongoose.model('projects', projectSchema);

module.exports = Project