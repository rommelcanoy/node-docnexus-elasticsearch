const { Client } = require('@elastic/elasticsearch');
const client = new Client({
  node: 'https://6083cecdc65f406387c4201028dc5597.us-east-1.aws.found.io:443',
  auth: {
      apiKey: 'bi1CR0VZMEJVdC1EZ2FFZF9UR3Q6UnVhNElJQ0xROG1xUWRicC1lTkpxUQ=='
  }
});

async function searchWithQuery() {
    try {
      const searchResult = await client.search({
        index: 'df_hospital_autocomplete',
        q: 'Shasta Regional'
      });
  
      console.log(searchResult.hits.hits);
    } catch (error) {
      console.error(error);
    }
}
  
searchWithQuery().then(() => {
});