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
      transactions: 'https://fakebanky.herokuapp.com/transactions',
      fruit:'https://fakebanky.herokuapp.com/fruit'
    },
    pages: {
      main: {
        demo: 'https://fakebanky.herokuapp.com/demo',
        fakebank: 'https://fakebanky.herokuapp.com/fakebank'
       
      }
    }
  });
});

app.get('/transactions', function (req, res) {
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
    app.get("/fruit", (req, res) => {
      res.json(
        {replay:' Choose wize "banana" or "strawberry"  '}
        );
    });
    app.get("/fruit/:fruit", (req, res) => {
        if ('banana'==fruit){
        res.json([
          [
            {
              CaseID:1,
              CustomerID:818591,
              Provider:6111,
              CREATED_ERROR_CODE:324,
              STATUS:"Closed",
              TICKET_CREATION_DATE:"3/14/201916:30",
              LAST_MODIFIED_DATE:"3/17/20193:41",
              PRODUCT_NAME:"BLUE"
            },
            {
              CaseID:2,
              CustomerID:790521,
              Provider:26241,
              CREATED_ERROR_CODE:0,
              STATUS:"Closed",
              TICKET_CREATION_DATE:"3/4/20199:30",
              LAST_MODIFIED_DATE:"3/5/20192:47",
              PRODUCT_NAME:"BLUE"
            },
            {
              CaseID:3,
              CustomerID:738081,
              Provider:1211,
              CREATED_ERROR_CODE:101,
              STATUS:"Closed",
              TICKET_CREATION_DATE:"2/5/20190:30",
              LAST_MODIFIED_DATE:"2/10/20191:52",
              PRODUCT_NAME:"BLUE"
            },
            {
              CaseID:4,
              CustomerID:729841,
              Provider:10416,
              CREATED_ERROR_CODE:101,
              STATUS:"Closed",
              TICKET_CREATION_DATE:"1/31/20196:31",
              LAST_MODIFIED_DATE:"2/3/20191:42",
              PRODUCT_NAME:"BLUE"
            },
            {
              CaseID:5,
              CustomerID:827331,
              Provider:11016,
              CREATED_ERROR_CODE:324,
              STATUS:"Closed",
              TICKET_CREATION_DATE:"3/19/201915:30",
              LAST_MODIFIED_DATE:"3/21/20198:54",
              PRODUCT_NAME:"BLUE"
            },
            {
              CaseID:6,
              CustomerID:831011,
              Provider:2811,
              CREATED_ERROR_CODE:108,
              STATUS:"Closed",
              TICKET_CREATION_DATE:"3/21/20196:33",
              LAST_MODIFIED_DATE:"3/21/201910:35",
              PRODUCT_NAME:"BLUE"
            },
            {
              CaseID:7,
              CustomerID:831071,
              Provider:12,
              CREATED_ERROR_CODE:101,
              STATUS:"Closed",
              TICKET_CREATION_DATE:"3/21/20197:31",
              LAST_MODIFIED_DATE:"3/21/201923:35",
              PRODUCT_NAME:"BLUE"
            },
            {
              CaseID:8,
              CustomerID:831831,
              Provider:10896,
              CREATED_ERROR_CODE:101,
              STATUS:"Closed",
              TICKET_CREATION_DATE:"3/21/201914:32",
              LAST_MODIFIED_DATE:"3/21/201916:35",
              PRODUCT_NAME:"BLUE"
            },
            {
              CaseID:9,
              CustomerID:792661,
              Provider:18121,
              CREATED_ERROR_CODE:195,
              STATUS:"Closed",
              TICKET_CREATION_DATE:"3/4/201915:32",
              LAST_MODIFIED_DATE:"3/4/201923:54",
              PRODUCT_NAME:"BLUE"
            },
            {
              CaseID:10,
              CustomerID:723441,
              Provider:11990,
              CREATED_ERROR_CODE:103,
              STATUS:"Open",
              TICKET_CREATION_DATE:"1/28/201915:30",
              LAST_MODIFIED_DATE:"1/29/20196:07",
              PRODUCT_NAME:"BLUE"
            }
         ]
        ]
         );
      } else if ('strawberry'==fruit){
        res.json([
          {
            CaseID:1,
            CustomerID:818591,
            Provider:10001121,
            CREATED_ERROR_CODE:101,
            STATUS:"Closed",
            TICKET_CREATION_DATE:"4/1/201917:25",
            LAST_MODIFIED_DATE:"4/2/20198:00",
            PRODUCT_NAME:"RED"
          },
          {
            CaseID:2,
            CustomerID:790521,
            Provider:11196,
            CREATED_ERROR_CODE:108,
            STATUS:"Closed",
            TICKET_CREATION_DATE:"3/22/201914:33",
            LAST_MODIFIED_DATE:"3/23/201923:00",
            PRODUCT_NAME:"GREEN"
          },
          {
            CaseID:3,
            CustomerID:738081,
            Provider:6111,
            CREATED_ERROR_CODE:324,
            STATUS:"Closed",
            TICKET_CREATION_DATE:"3/14/201916:30",
            LAST_MODIFIED_DATE:"3/17/20193:41",
            PRODUCT_NAME:"ORANGE"
          },
          {
            CaseID:4,
            CustomerID:729841,
            Provider:11181,
            CREATED_ERROR_CODE:122,
            STATUS:"Closed",
            TICKET_CREATION_DATE:"2/5/201917:32",
            LAST_MODIFIED_DATE:"2/6/20191:06",
            PRODUCT_NAME:"PINK"
          }
       ]);
      }
      else{
        res.status = 401;
        res.json('requested fruit is not supported ['+fruit+']');
      }
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
