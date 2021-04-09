const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
app.use(cors())
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/plain');

    res.json([
        {id: 1, "name": "Jack", "age": 22, "img":'http://localhost:3001/img/1.jpg', "gender": 'male'},
        {id: 2, "name": "Aleksa", "age": 24, "img":'http://localhost:3001/img/2.png', "gender": 'female'},
        {id: 3, "name": "John", "age": 27, "img":'http://localhost:3001/img/3.png', "gender": 'male'},
        {id: 4, "name": "Ann", "age": 21, "img":'http://localhost:3001/img/4.png', "gender": 'female'},
        {id: 5, "name": "Ken", "age": 59, "img":'http://localhost:3001/img/5.png', "gender": 'male'},
        {id: 6, "name": "Sarah", "age": 30, "img":'http://localhost:3001/img/6.png', "gender": 'female'},
        {id: 7, "name": "Jackson", "age": 18, "img":'http://localhost:3001/img/7.png', "gender": 'male'},
        {id: 8, "name": "Hope", "age": 44, "img":'http://localhost:3001/img/8.png', "gender": 'female'},
])
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

