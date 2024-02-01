var express = require('express');
var router = express.Router();

const Project = require('../models/projects');

router.post('/', (req, res) => {
    const {name, description, linkWebSite} = req.body
    console.log('name', name)
    Project.findOne({ name: name })
    .then(data => {
        if (data === null){
            const newProject = new Project({
                name: name,
                description: description,
                linkWebSite: linkWebSite,
            })
            newProject.save().then(data => {
                res.json({ result: true, project: data })
                console.log('save', data)
            })
        }
    })
});

module.exports = router;
