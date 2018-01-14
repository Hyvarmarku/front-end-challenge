const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser')

const PORT = 5080;
const HOST = '127.0.0.1';

const cars = [{
        "id" : 1,
        "img" : "2004_Porsche_911_Carrera_type_997.jpg",
        "manufacturer" : "Porsche",
        "model" : "911",
        "price" : 135000,
        "quality" : [{
            "name" : "overall",
            "rating" : 1
        },{
            "name" : "mechanical",
            "rating" : 4
        },{
            "name" : "powertrain",
            "rating" : 2
        },{
            "name" : "body",
            "rating" : 4
        },{
            "name" : "interior",
            "rating" : 3
        },{
            "name" : "accessories",
            "rating" : 2
        }],
        "wiki" : "http://en.wikipedia.org/wiki/Porsche_997"
    },{
        "id" : 2,
        "img" : "250px-Nissan_GT-R.jpg",
        "manufacturer" : "Nissan",
        "model" : "GT-R",
        "price" : 80000,
        "quality" : [{
            "name" : "overall",
              "rating" : 2
            },
            { "name" : "mechanical",
              "rating" : 3
            },
            { "name" : "powertrain",
              "rating" : 5
            },
            { "name" : "body",
              "rating" : 4
            },
            { "name" : "interior",
              "rating" : 2
            },
            { "name" : "accessories",
              "rating" : 2
            }
        ],
        "wiki" : "http://en.wikipedia.org/wiki/Nissan_Gt-r"
    },{
        "id" : 3,
        "img" : "250px-BMW_M3_E92.jpg",
        "manufacturer" : "BMW",
        "model" : "M3",
        "price" : 60500,
        "quality" : [ { "name" : "overall",
              "rating" : 3
            },
            { "name" : "mechanical",
              "rating" : 5
            },
            { "name" : "powertrain",
              "rating" : 3
            },
            { "name" : "body",
              "rating" : 4
            },
            { "name" : "interior",
              "rating" : 5
            },
            { "name" : "accessories",
              "rating" : 3
            }
        ],
        "wiki" : "http://en.wikipedia.org/wiki/Bmw_m3"
    },{
        "id" : 4,
        "img" : "250px-Audi_S5.jpg",
        "manufacturer" : "Audi",
        "model" : "S5",
        "price" : 53000,
        "quality" : [ { "name" : "overall",
              "rating" : 4
            },
            { "name" : "mechanical",
              "rating" : 1
            },
            { "name" : "powertrain",
              "rating" : 1
            },
            { "name" : "body",
              "rating" : 4
            },
            { "name" : "interior",
              "rating" : 1
            },
            { "name" : "accessories",
              "rating" : 5
            }
        ],
        "wiki" : "http://en.wikipedia.org/wiki/Audi_S5#Audi_S5"
    },{
        "id" : 5,
        "img" : "250px-2007_Audi_TT_Coupe.jpg",
        "manufacturer" : "Audi",
        "model" : "TT",
        "price" : 40000,
        "quality" : [{
            "name" : "overall",
              "rating" : 5
            },
            { "name" : "mechanical",
              "rating" : 2
            },
            { "name" : "powertrain",
              "rating" : 2
            },
            { "name" : "body",
              "rating" : 3
            },
            { "name" : "interior",
              "rating" : 4
            },
            { "name" : "accessories",
              "rating" : 1
            }
        ],
        "wiki" : "http://en.wikipedia.org/wiki/Audi_TT"
    },{
      "id" : 5,
      "img" : "250px-2007_Audi_TT_Coupe.jpg",
      "manufacturer" : "Audi",
      "model" : "TT",
      "price" : 40000,
      "quality" : [{
          "name" : "overall",
            "rating" : 5
          },
          { "name" : "mechanical",
            "rating" : 2
          },
          { "name" : "powertrain",
            "rating" : 2
          },
          { "name" : "body",
            "rating" : 3
          },
          { "name" : "interior",
            "rating" : 4
          },
          { "name" : "accessories",
            "rating" : 1
          }
      ],
      "wiki" : "http://en.wikipedia.org/wiki/Audi_TT"
  },{
    "id" : 5,
    "img" : "250px-2007_Audi_TT_Coupe.jpg",
    "manufacturer" : "Audi",
    "model" : "TT",
    "price" : 40000,
    "quality" : [{
        "name" : "overall",
          "rating" : 5
        },
        { "name" : "mechanical",
          "rating" : 2
        },
        { "name" : "powertrain",
          "rating" : 2
        },
        { "name" : "body",
          "rating" : 3
        },
        { "name" : "interior",
          "rating" : 4
        },
        { "name" : "accessories",
          "rating" : 1
        }
    ],
    "wiki" : "http://en.wikipedia.org/wiki/Audi_TT"
}]



app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb' }));

app.use(cors());

app.get('/api/cars', function(req, res) { req.query.manufacturer ? res.json(cars.filter((x) => x.manufacturer.toLowerCase().indexOf(req.query.manufacturer.toLowerCase()) != -1)) : res.json(cars);});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);