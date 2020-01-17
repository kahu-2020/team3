const express = require('express')
const hbs = require('express-handlebars')
const router = require('./router')
const server = express()

const quizData = require('./quiz.json')


// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))

server.set('view options', {layout: 'main'})
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

//Global Variables
let userName = '';
let blobFishScore = 0;
let grouseScore = 0;
let fennicFox = 0;
let axolotl = 0;
let questionCounter = 1


server.get('/', (req, res) => {
  res.render("home.hbs")
})

server.post('/name', (req, res) => {
  username = req.body.name 
  res.redirect('/quiz/1')
})

server.get('/quiz/:id', (req, res) => {
  
  let currentQuestion = quizData.questions.find((question) => {
    return question.id == req.params.id
  }) 

  
  if (questionCounter < 8) {
    questionCounter++
    res.render("quiz", currentQuestion)
  } else {
    res.render("blurb", router.blurb)
  }
  
  
  
  
  
})



server.post('/quiz/answer/1', (req, res) => {
  blobFishScore++
  console.log(req) 
  res.redirect('/quiz/' + questionCounter)
})

server.post('/quiz/answer/2', (req, res) => {
  grouseScore++
  //console.log(grouseScore) 
  res.redirect('/')
})

server.post('/quiz/answer/3', (req, res) => {
  fennicFox++
  //console.log(fennicFox) 
  res.redirect('/')
})

server.post('/quiz/answer/4', (req, res) => {
  axolotl++
  //console.log(axolotl) 
  res.redirect('/')
})



module.exports = server