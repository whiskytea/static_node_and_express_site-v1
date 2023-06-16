//set up the app to use Express and Pug
const express = require('express');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.set('view engine', 'pug');
app.use(express.json());
//get the project JSON
const { data } = require('./data/data.json');
const { projects } = data;
const mainRoutes = require("./flashcards/fc_index");
const cardRoutes = require("./flashcards/cards");

//set static access to the imgs,css, js
app.use('/static', express.static('public'));
app.use('/fc-static', express.static('../flashcards/public'))
app.use('/flashcards', mainRoutes);
app.use('/flashcards/card', cardRoutes);

//GET routes
app.get('/', (req,res) =>{
    res.render('index', {projects});
})

app.get('/about', (req,res) =>{
    res.render('about');
})

app.get('/project/:id', (req,res) =>{
    const { id } = req.params; //what project is this?
    const project = projects[id]; //snags the matching project from the JSON
    const {project_name} = project;
    const {description} = project;
    const {technologies} = project;
    const {live_link} = project;
    const {github_link} = project;
    const {image_urls} = project;
    const templateData = {project_name, description, technologies, live_link, github_link, image_urls};

    res.render('project', templateData);
})

app.listen(3000, ()=>{
    console.log('The application is running on localhost 3000');
});