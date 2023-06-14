//set up the app to use Express and Pug
const express = require('express');
const app = express();
app.set('view engine', 'pug');

//get the project JSON
// const { data } = require('data.json');
// const { projects } = data;

//set static access to the imgs,css, js
app.use('/static', express.static('public'));

//GET routes
app.get('/', (req,res) =>{
    res.render('index');
})

app.get('/about', (req,res) =>{
    res.render('about');
})

app.get('/project/:id', (req,res) =>{
    const { id } = req.params; //what project is this?
    // const project = projects[id]; //snags the matching project from the JSON
    res.render('project');
})

app.listen(3000, ()=>{
    console.log('The application is running on localhost 3000');
});