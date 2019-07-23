const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const name = req.cookies.username
    if (name) {
        res.render('index', {
            name
        })
    } else {
        res.redirect('/hello')
    }
})

// router.get('/cards', (req, res) => {
//     res.locals.prompt = "Who is buried in Grant's tomb?"
//     res.locals.hint = "Think"
//     res.locals.colors = colors
//     res.render('card')
// })

router.get('/hello', (req, res) => {
    const name = req.cookies.username
    if (name)
        res.redirect('/')
    else
        res.render('hello')

})

router.post('/hello', (req, res) => {
    console.dir(req.body, req.body.username)
    res.cookie('username', req.body.username)
    res.redirect('/')
})

router.post('/goodbye', (req, res) => {
    res.clearCookie('username')
    res.redirect('/hello')
})

module.exports = router