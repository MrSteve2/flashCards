const express = require('express')
const router = express.Router()
let data = require('../data/flashcardData.json')
data = data.data
const cards = data.cards

// A use case for desconstruction
// ==============================
// const { layer1, layer2 } = obj
// const layer1 = obj.layer1
// const layer2 = obj.layer2

colors = ["red", "blue", "green"]

router.get('/', (req, res) => {
    const flashCardId = Math.floor(Math.random() * cards.length)
    res.redirect(`/cards/${flashCardId}?side=question`)
})
router.get('/:id', (req, res) => {
    let side = req.query.side
    const id = req.params.id
    const text = cards[id][side]
    if (!side)
        side = 'question'

    const templateData = {
        id,
        text
    }

    if (side === "question") {
        templateData.hint = cards[id].hint
        templateData.sideToShowDisplay = "Answer"
        templateData.sideToShow = "answer"
    } else if (side === 'answer') {
        templateData.sideToShowDisplay = "Question"
        templateData.sideToShow = "question"
    }

    res.render('card', templateData)
})

module.exports = router