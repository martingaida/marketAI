module.exports = {
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8080,
    openAI: {
        apiKey: process.env.OPEN_AI_API_KEY,
        orgID: process.env.OPEN_AI_ORG_ID
    }
};