const serverless = require('serverless-http');
const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require('../../src/App').default;

const app = express();

app.get('*', (req, res) => {
  const appHTML = renderToString(<App />);
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>My SSR App</title>
      </head>
      <body>
        <div id="root">${appHTML}</div>
      </body>
    </html>
  `;
  res.send(html);
});

module.exports.handler = serverless(app);
