const express = require("express")

const router = express.Router()
const fs = require('fs')
const server = require('./server')
const quizData = require('./quiz.json')
const animalData = require('./animals.json')
const hbs = require('express-handlebars')


//Global Variables
let userName = '';
let blobFishScore = 0;
let grouseScore = 0;
let fennicFox = 0;
let axolotl = 0;
let questionCounter = 1

console.log(server.blobFishScore)



router.get('/blurb', (req, res) => {
    //console.log("QWERTY")
    //doublecheck if we need / before filename
    fs.readFile('./animals.json', 'utf8', (err, data) => {
        if(err) {
            //console.log(err)
        }
        animals = JSON.parse(data).animals
        //console.log(animals[0]) 
        if(blobFishScore > grouseScore && blobFishScore > fennicFox && blobFishScore > axolotl) {
            blurb = animals[0]['blurb']
            } else if(grouseScore > blobFishScore && grouseScore > fennicFox && grouseScore > axolotl) {
                    blurb = animals[1].blurb
                } else if (fennicFox > blobFishScore && fennicFox > grouseScore && fennicFox > axolotl) {
                    blurb = animals[2].blurb
                } else {
                    blurb = animals[3].blurb
                }
        console.log(typeof blurb) 
        
        viewdata = {
            blurb: blurb
        }
        
        res.render('blurb', viewdata)
        // console.log(animals)
    })  
})



router.get('/', (req, res) => {
  res.render("home.hbs")
})

router.post('/name', (req, res) => {
  username = req.body.name 
  res.redirect('/quiz/1')
})

router.get('/quiz/:id', (req, res) => {
  
  let currentQuestion = quizData.questions.find((question) => {
    return question.id == req.params.id
  }) 

  
  if (questionCounter < 8) {
    //console.log(currentQuestion)
    questionCounter++
    res.render("quiz", currentQuestion)
  } else {
    res.redirect("/blurb")
  } 
})

router.get('/blurb/:type', (req, res) => {
  
    let currentAnimal = animalData.animals.find((animal) => {
      return animal.type == req.params.type
    }) 
  
    //console.log(currentAnimal)
    res.render("blurb.hbs", currentAnimal)
  })
  
  
  router.post('/quiz/answer/1', (req, res) => {
    blobFishScore++
    //console.log(req) 
    res.redirect('/quiz/' + questionCounter)
  })
  
  router.post('/quiz/answer/2', (req, res) => {
    grouseScore++
    //console.log(grouseScore) 
    res.redirect('/quiz/' + questionCounter)
  })
  
  router.post('/quiz/answer/3', (req, res) => {
    fennicFox++
    //console.log(fennicFox) 
    res.redirect('/quiz/' + questionCounter)
  })
  
  router.post('/quiz/answer/4', (req, res) => {
    axolotl++
    //console.log(axolotl) 
    res.redirect('/quiz/' + questionCounter)
  })




module.exports = router 


/* 



        */