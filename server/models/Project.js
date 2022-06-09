const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const projectSchema = new Schema({
  // changing from thoughtText to projectTitle
  projectTitle: {
    type: String,
    required: 'You need to give your project a title!',
    minlength: 1,
    // changed maxLength from 280
    maxlength: 30,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  expenses: [
    {
      expenseText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      expenseCount: {
        type: Number,
        required: true,
      },
      expensePrice: {
        type: Number,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Project = model('Project', projectSchema);

module.exports = Project;
