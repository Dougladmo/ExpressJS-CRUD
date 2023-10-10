// senha database => xDX2DPOU7lwXX1rL
// string mongodb => mongodb+srv://douglas:xDX2DPOU7lwXX1rL@cluster0.pqiavvu.mongodb.net/?retryWrites=true&w=majority

//  config inicial
const express = require("express");
const mongoose = require('mongoose')
const app = express()

// forma de ler JSON
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// rotas da API
const personRoutes = (require('./routes/personRoutes'))

app.use('/person', personRoutes)

// Rota inicial / endpoint
app.get('/', (req, res) => {
    // mostrar req

    res.json({ message: 'Oi express! '})
})

// entregar uma porta
mongoose.connect('mongodb+srv://douglas:xDX2DPOU7lwXX1rL@cluster0.pqiavvu.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('conectado ao mongoDB!')
    app.listen(3000)
})
.catch((err) => console.log(err))
