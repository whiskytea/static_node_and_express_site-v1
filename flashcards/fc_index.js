const express = require('express');
const router = express.Router();

router.get('/hello', (req,res)=>{
    const name = req.cookies['name'];
    if (name) {
        res.redirect('/');
    } else {
        res.render('../flashcards/views/hello');
    }
})

router.get('/', (req, res)=>{
    const name = req.cookies['name'];
    if (name) {
        res.render('../flashcards/views/index', {name});
    }else{
        res.redirect('/flashcards/hello');
    }
})

router.post('/signOut', (req,res) =>{
    res.clearCookie('name');
    res.redirect('/flashcards/hello');
})

router.post('/cards', (req,res)=>{
    res.redirect('flashcards//card');
})

router.post('/home', (req, res)=>{
    res.cookie('name', req.body.name);
    res.redirect('/flashcards');
})

router.post('/homepage', (req,res)=>{
    res.redirect('/flashcards');
});



module.exports = router;