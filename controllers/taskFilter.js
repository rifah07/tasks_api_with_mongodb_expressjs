import OpenAI from 'openai';

const taskFilter = (req, res) => {

    const client = new OpenAI({
        apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
      });

      
    res.status(200).json({
        status: "Greetings from Open AI"
    })
};

module.exports = taskFilter;