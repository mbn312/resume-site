var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



var pgp = require('pg-promise')();

/*
let dbConfig = {
	host: 'localhost',
	port: 5432,
	database: 'final_db', //postgres db name
	user: 'postgres',     //postgres user
	password: 'postgres'  //postgres password
};

const isProduction = process.env.NODE_ENV === 'production';
dbConfig = isProduction ? process.env.DATABASE_URL : dbConfig;
let db = pgp(dbConfig);
*/


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));


app.get('/', function(req, res) {
	res.render('pages/home',{ 
		local_css:"main.css",
		my_title:"Matt Nguyen"
	});
});

app.get('/work', function(req, res) {
	res.render('pages/work',{ 
		local_css:"main.css", 
		my_title:"Work History"
	});
});

app.get('/education', function(req, res) {
	res.render('pages/education',{ 
		local_css:"main.css", 
		my_title:"Education History"
	});
});

app.get('/skills', function(req, res) {
	res.render('pages/skills',{ 
		local_css:"main.css", 
		my_title:"Skills"
	});
});

app.get('/projects', function(req, res) {
	res.render('pages/projects',{ 
		local_css:"main.css", 
		my_title:"Projects"
	});
});

app.get('/contact', function(req, res) {
	res.render('pages/contact',{ 
		local_css:"main.css", 
		my_title:"Contact Me"
	});
});

app.get('/weather-project', function(req, res) {
	res.render('pages/weather-project',{ 
		local_css:"weather.css",
		local_script:"weather_scripts.js",
		my_title:"Weather"
	});
});

app.get('/tic-tac-toe', function(req, res) {
	res.render('pages/tic-tac-toe',{ 
		local_css:"tic-tac-toe.css",
		local_script:"tic-tac-toe_scripts.js",
		my_title:"Tic-Tac-Toe"
	});
});

app.get('/flickr-api', function(req, res) {
	res.render('pages/flickr-api',{ 
		local_css:"flickr_api.css",
		local_script:"flickr-api_scripts.js",
		my_title:"Flickr API"
	});
});


const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    //console.log(`Express running → PORT ${server.address().port}`);
    console.log(`listening on http://localhost:${server.address().port}/`);
});
