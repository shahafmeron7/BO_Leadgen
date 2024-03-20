const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const Questionnaire = require('../models/Questionnaire'); // Ensure this path is correct
  const token = `questionnaire_${uuidv4()}`;

// Get all questionnaires

router.get('/', async (req, res) => {
    try {
        const questionnaires = await Questionnaire.find();
        res.json(questionnaires);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new questionnaire
router.post('/', async (req, res) => {
    const questionnaireToken = `questionnaire_${uuidv4()}`;

    const questionnaire = new Questionnaire({
        token: questionnaireToken,
        title: req.body.title,
        portal: req.body.portal,
        description: req.body.description,
        questions: req.body.questions
    });

    try {
        const newQuestionnaire = await questionnaire.save();
        res.status(201).json(newQuestionnaire);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Additional routes for updating and deleting questionnaires can be added here

module.exports = router;
