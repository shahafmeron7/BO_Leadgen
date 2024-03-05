const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    questionText: { type: String, required: true },
    answerType: { type: String, required: true }, // e.g., 'text', 'choice'
    choices: [String], // For multiple-choice questions
    identifierId: { type: String, required: true }
});

module.exports = mongoose.model('Question', questionSchema);
