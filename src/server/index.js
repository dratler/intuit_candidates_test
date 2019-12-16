const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || '3000';

app.set('view engine','hbs');
app.use(express.static(__dirname +'/public' ));

app.get('/',  function(req, res){
  res.json({
    status: 'Working',
    api:{
      transctions:'https://fakebanky.herokuapp.com/transctions'
    },
    pages:{
     main:{
       demo:'https://fakebanky.herokuapp.com/demo',
       fakebank:'https://fakebanky.herokuapp.com/fackbank'
     }
    }
  });
});

app.get('/transctions', function(req, res){
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
  })
});

app.get("/demo", (req, res) => {
  // res.send('it"s all about the base');
  res.render('demo.hbs',{
      title:'This is demo page',
      section:'“Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone, Nine for Mortal Men, doomed to die, One for the Dark Lord on his dark throne In the Land of Mordor where the Shadows lie.One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.In the Land of Mordor where the Shadows lie.”― J. R. R. Tolkien, The Lord of the Rings'
  });
});

app.get("/fakebank", (req, res) => {
  res.render('fakebank.hbs',{
      title:'This is demo page',
      fakeUser:'Dejuan Wintheiser (Tad)'

  });
});

app.listen(port,function(){
  console.log(`Server is working on port ${port}`);
});