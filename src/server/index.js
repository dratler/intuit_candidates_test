const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || '3000';

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.json({
    status: 'Working',
    api: {
      transactions: 'https://fakebanky.herokuapp.com/transactions'
    },
    pages: {
      main: {
        demo: 'https://fakebanky.herokuapp.com/demo',
        fakebank: 'https://fakebanky.herokuapp.com/fakebank'
      }
    }
  });
});

app.get('/transctions', function (req, res) {
      res.json({
        accounts: [
          {
            account:'7b5092b8-73f1-471d-96d8-31b20dca913b',
            type:'PERSONAL',
            transactions:[{
              id: 21323424353,
              amount: 12.45,
              currency: "USD"
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
            }]
          },
          {
            account:'e53cbe01-542c-4e70-b1e5-60956af73f037b5092b8-73f1-471d-96d8-31b20dca913b',
            type:'BUSINESS',
            transactions:[{
              id: 789698,
              amount: 45888.787,
              currency: "USD"
            },
            {
              id: 34579080,
              amount: -67.13,
              currency: "FEN"
            },
            {
              id: 23489080,
              amount: 71.51,
              currency: "EUR"
            }]
          }
        ]
      })
    });

      app.get("/demo", (req, res) => {
        // res.send('it"s all about the base');
        res.render('demo.hbs', {
          title: 'This is demo page',
          section: '“Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone, Nine for Mortal Men, doomed to die, One for the Dark Lord on his dark throne In the Land of Mordor where the Shadows lie.One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.In the Land of Mordor where the Shadows lie.”― J. R. R. Tolkien, The Lord of the Rings'
        });
      });

      app.get("/fakebank", (req, res) => {
        res.render('fakebank.hbs', {
          title: 'This is demo page',
          fakeUser: 'Dejuan Wintheiser (Tad)'

        });
      });

      app.listen(port, function () {
        console.log(`Server is working on port ${port}`);
      });
