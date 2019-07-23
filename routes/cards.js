const express = require('express')
const router = express.Router()

colors = ["red", "blue", "green"]
router.get('/', (req, res) => {
    res.locals.prompt = "Who is buried in Grant's tomb?"
    res.locals.hint = "Think"
    res.locals.colors = colors
    res.render('card')
})

module.exports = router