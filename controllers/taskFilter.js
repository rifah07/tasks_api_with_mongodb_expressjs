import OpenAI from 'openai';

const taskFilter = (req, res) => {

    const client = new OpenAI({
        apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
      });

      function main() {
        const chatCompletion = await client.chat.completions.create({
          messages: [{ role: 'user', content: 'Say this is a test' }],
          model: 'gpt-4o',
        });
      }
      
      main();

    res.status(200).json({
        status: "Greetings from Open AI"
    })
};

module.exports = taskFilter;