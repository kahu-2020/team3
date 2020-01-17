const express = require('express')
const hbs = require('express-handlebars')

const server = express()

const quizData = require('./quiz.json')
const animalData = require('./animals.json')


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

  console.log(currentQuestion)
  res.render("quiz.hbs", currentQuestion)
})


server.get('/blurb/:type', (req, res) => {
  
  let currentAnimal = animalData.animals.find((animal) => {
    return animal.type == req.params.type
  }) 

  console.log(currentAnimal)
  res.render("blurb.hbs", currentAnimal)
})


server.post('/quiz/answer/1', (req, res) => {
  blobFishScore++
  console.log(blobFishScore) 
  res.redirect('/')
})

server.post('/quiz/answer/2', (req, res) => {
  grouseScore++
  console.log(grouseScore) 
  res.redirect('/')
})

server.post('/quiz/answer/3', (req, res) => {
  fennicFox++
  console.log(fennicFox) 
  res.redirect('/')
})

server.post('/quiz/answer/4', (req, res) => {
  axolotl++
  console.log(axolotl) 
  res.redirect('/')
})



module.exports = server