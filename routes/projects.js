var express = require('express');
var router = express.Router();
var Project = require('../models/project');

/*
* check ElasticSearch mapping
*/
Project.createMapping((err, mapping) => {
  if(err){
    console.log('error to create mapping');
    console.log(err);
  } else {
    console.log('Mapping created');
    console.log(mapping);
  }
});

/*
* Index old data code
*/
const stream = Project.synchronize();
let count = 0;

stream.on('data', () => {
  count++;
});

stream.on('close', () => {
  console.log("Indexed" + count + " documents");
});

stream.on('remove', (err) => {
  if(err){
    console.log(err);
  }else{
    console.log("remove Indexed");
  }
});

stream.on('error', (err) => {
  console.log(err);
});


/* GET projects data. */
router.get('/', (req, res, next) => {
  Project.find({}, (err, projects) => {
    res.status(200).json({ projects });
  })
});

/* New project save. */
router.post('/', function(req, res, next) {
  try{
    const newProject = new Project(req.body);
    newProject.save((err) => {
        if (err) {
          res.status(400).json({ error: 'Bad Request' });
        }
        else {
          res.status(200).json({ success: 'success' });
        }
    });
  }catch(err) {
    // Need to store error in file or mongo db
    res.status(500).json({ error: 'Internal server error' });
  }
});

/* Update project. */
router.patch('/:id', (req, res, next) => {
  try{
    Project.findOneAndUpdate(req.params.id, req.body,{ upsert: true,'new': true }, (err, doc) => {
      if (err) {
        res.status(400).json({ error: 'Bad Request' });
      }
      else {
        res.status(200).json({ success: 'success', 'data': doc });
      }
    });
  }catch(err) {
    // Need to store error in file or mongo db
    res.status(500).json({ error: 'Internal server error' });
  }
});

/* Delete project.*/
router.delete('/:id', (req, res, next) => {
  try{
    Project.remove({_id: req.params.id}, err => {
      res.status(200).json({ success: 'success' });
    });
  }catch(err) {
    // Need to store error in file or mongo db
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
