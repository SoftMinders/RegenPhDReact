require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react'],
  });
  require('ignore-styles'); // To ignore CSS imports in server code
  
  const path = require('path');
  const fs = require('fs');
  const express = require('express');
  const React = require('react');
  const ReactDOMServer = require('react-dom/server');
  const { StaticRouter } = require('react-router-dom/server');
  const App = require('./src/App').default; // Adjust path to your App
  
  const PORT = 3000;
  const app = express();
  
  app.use(express.static(path.resolve(__dirname, 'build')));
  
  app.get('*', (req, res) => {
    const context = {};
    const appHTML = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );
  
    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading index.html', err);
        return res.status(500).send('Internal Server Error');
      }
  
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`)
      );
    });
  });
  
  app.listen(PORT, () => {
    console.log(`SSR running on http://localhost:${PORT}`);
  });
  