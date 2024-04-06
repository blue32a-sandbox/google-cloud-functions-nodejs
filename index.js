const functions = require('@google-cloud/functions-framework');

functions.http('hello', (req, res) => {
  const name = req.query.name || 'World';
  res.send(`Hello, ${name}!`);
});
