const express = require('express')
const app = express()
const logger = require('./middleware/logger')

app.listen(5000, () => {
    console.log('server running on PORT', 5000)
})
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs')



app.use(logger)

app.get('/', (req, res) => {
    res.render('home', { title: 'home' })
})
app.get('/services', (req, res) => {
    res.render('services', { title: 'services' })
})
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'contact' })
})
app.use((req, res) => { res.status(404).render('404', { title: 'Not Found' }) })