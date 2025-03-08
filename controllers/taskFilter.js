const OpenAI = require('openai');

const taskFilter = async (req, res) => {

    const client = new OpenAI({
        apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
      });

      async function main() {
        const chatCompletion = await client.chat.completions.create({
          messages: [{ role: 'user', content: 'Say this is a testfor OpenAI' }],
          model: 'gpt-3.5-turbo',
        });
      }
      
      await main();

    res.status(200).json({
        status: "Greetings from Open AI"
    })
};

module.exports = taskFilter;