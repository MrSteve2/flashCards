const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cookieParser());

// app.use((req, res, next) => {
//         console.log('One')
//         next()
//     },
//     (req, res, next) => {
//         console.log('One.5')
//         next()
//     })

// app.use((req, res, next) => {
//     req.message = 'THis message made it'
//     console.log(req.message)
//     next()
// })

const mainRoutes = require('./routes')
const cardRoutes = require('./routes/cards')

app.use(mainRoutes)
app.use('/cards', cardRoutes)
app.listen(3000, () => {
    console.log('app running on port 3000')
})

//if we got this far no route found so 404
app.use((req, res, next) => {
    req.message = 'THis message made it'
    const err = new Error('Page Not Found')
    err.status = 404
    next(err)
})
app.use((err, req, res, next) => {
    console.log(req.message)
    res.locals.error = err
    res.status(err.status)
    res.render('error')
})