const functions = require('@google-cloud/functions-framework');

functions.http('hello', (_, res) => {
  res.send('Hello, world!');
});
