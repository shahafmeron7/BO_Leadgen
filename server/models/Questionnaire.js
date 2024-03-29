const mongoose = require("mongoose");
const answerSchema = new mongoose.Schema({
  text: { type: String, required: true },
  funnelId: { type: Number, required: true, min: 1 }, 
});

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  type: { type: String, required: true }, // e.g., 'text', 'choice'
  answers: [answerSchema], // Embedding answers directly with funnelId
  identifier_id: { type: String, required: true },
  funnelId: { type: Number, required: true, min: 1 }, // Added for question funnelId
});

const questionnaireSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  portal: { type: String, required: true },
  questions: [questionSchema], 
},{ timestamps: true });
module.exports = mongoose.model("Questionnaire", questionnaireSchema);
