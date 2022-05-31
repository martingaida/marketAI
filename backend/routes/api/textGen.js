const express = require('express');
const asyncHandler = require('express-async-handler');
const { validationResult } = require('express-validator');
const csrf = require('csurf');
const { response } = require('express');
const csrfProtection = csrf({ cookie: true });
const router = express.Router();
const { generateCompletion } = require('../../utils/openAI');

// Create a text
router.post('/new',
    csrfProtection,
    asyncHandler(async (req, res) => {
        const { prompt } = req.body
        const validationErrors = validationResult(req) 
        
        if (validationErrors.isEmpty()) {
            const content = await generateCompletion(prompt)
            console.log('Prompt: ', prompt)
            res.json(content)
        } else {
            const errors = validationErrors.array().map(error => error.msg)
            console.log(errors)
        }
    })
);

module.exports = router