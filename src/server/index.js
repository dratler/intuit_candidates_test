const express = require('express');
const app = express();
const port = process.env.PORT || "3000";

app.get('/', function (req, res) {
  res.json({
    status: 'Working'
  });
});

app.get('/transctions', function (req, res) {
  res.json({
    transctions: [{
        id: 21323424353,
        amount: 12.45,
        currency: 'USD'
      },
      {
        id: 6342746827642876,
        amount: -67.13,
        currency: "GBP"
      },
      {
        id: 58958088504,
        amount: 987.5,
        currency: "NIS"
      }
    ]
  });
});

app.listen(port);