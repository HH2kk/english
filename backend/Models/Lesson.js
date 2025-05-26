// models/Lesson.js
const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: String,
  topic: String,
  content: String
});

module.exports = mongoose.model('Lesson', lessonSchema);
