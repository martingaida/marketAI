const { Configuration, OpenAIApi } = require('openai');
const { openAI } = require('../config/index');

const configuration = new Configuration({
    apiKey: openAI.apiKey,
    orgID: openAI.orgID
});

const openai = new OpenAIApi(configuration);

const generateCompletion = async (prompt) => {

    const response = await openai.createCompletion('text-davinci-001', {
        prompt,
        max_tokens: 100,
        temperature: 0.6,
        n:1,
        best_of:100,
    });
    console.log('Response: ', response.data.choices[0].text)
    return response.data.choices[0].text;
};

module.exports = { generateCompletion };