const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
    }
  }
);

projectSchema.plugin(mongoosastic,{
  hosts: [
    process.env.PORT || 'localhost:9200'    
  ]
});
 
const Project = mongoose.model('project', projectSchema);



module.exports = Project;