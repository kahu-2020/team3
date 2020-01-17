const express = require("express")
const router = express.Router()
const fs = require('fs')
let user = ""
router.get('/', (req, res) => {
    res.send('/home')
})

router.get('/quiz/:id', (req,res) => {
    fs.readFile('./quiz.json', 'utf8', (err,data) => {
        if(err) {
            console.log("Wooops")
        }
        let questions = JSON.parse(data).questions
        let q = questions.find(question => {
            question == 'q' + req.params.id
    })
        res.render('/questions', q)    
    })   
})

router.get('/blurb', (req, res) => {
    //doublecheck if we need / before filename
    fs.readFile('/animals', 'utf8', (err, data) => {
        animals = JSON.parse(data).animals
        if(blobFishScore > grouseScore && blobFishScore > fennicFox && blobFishScore > axolotl) {
            blurb = animals['blobfish'].blurb
            } else if(grouseScore > blobfishScore && grouseScore > fennicFox && grouseScore > axolotl) {
                    blurb = animals['grouseScore'].blurb
                } else if (fennicFox > blobfishScore && fennicFox > grouseScore && fennicFox > axolotl) {
                    blurb = animals['fennicFox'].blurb
                } else {
                    blurb = animals['axolotl'].blurb
                }
        console.log(blurb) 
        res.render('/burb', blurb)
    })  
})



module.exports = router