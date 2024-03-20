import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/questionnaires'; // Adjust as necessary

export const createQuestionnaire = async (questionnaireData) => {
    try {
        const response = await axios.post(BASE_URL, questionnaireData);
        return response.data;
    } catch (error) {
        console.error("Error creating questionnaire", error);
        throw error;
    }
};
