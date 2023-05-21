const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"));

/* setting view engine ejs */
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/games', (req, res) => {
    res.render('games')
})

// app.get('/', (_, res) => {
//     res.json({
//         message: 'hello world'
//     })
// })

// app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => console.log('Example app listening at port 3000'))