import express from 'express';
import { Client } from '@elastic/elasticsearch';

const app = express();
const port = 80;

const client = new Client({
  node: 'https://6083cecdc65f406387c4201028dc5597.us-east-1.aws.found.io:443',
  auth: {
      apiKey: 'bi1CR0VZMEJVdC1EZ2FFZF9UR3Q6UnVhNElJQ0xROG1xUWRicC1lTkpxUQ=='
  }
});

app.get('/search', async (req, res) => {
  try {
    const query = req.query.q || '';

    const searchResult = await client.search({
      index: 'df_hospital_autocomplete',
      q: query
    });

    res.json(searchResult.hits.hits);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
