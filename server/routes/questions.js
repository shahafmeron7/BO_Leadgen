const express = require('express');
const router = express.Router();
const Question = require('../models/question');

// Get all questions
router.get('/', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new question
router.post('/', async (req, res) => {
    const question = new Question({
        questionText: req.body.questionText,
        answerType: req.body.answerType,
        choices: req.body.choices,
        identifierId: req.body.identifierId
    });

    try {
        const newQuestion = await question.save();
        res.status(201).json(newQuestion);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Additional routes for updating and deleting questions can be added here

module.exports = router;
