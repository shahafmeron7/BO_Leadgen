const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    text: { type: String, required: true },
    type: { type: String, required: true }, // e.g., 'text', 'choice'
    answers: [String], 
    identifier_id: { type: String, required: true }
});
const questionnaireSchema = new mongoose.Schema({
    token: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    portal: { type: String, required: true },    
    questions: [questionSchema] // Embedding questions directly
    // Alternatively, for larger scale applications, consider referencing questions
});

module.exports = mongoose.model('Questionnaire', questionnaireSchema);
