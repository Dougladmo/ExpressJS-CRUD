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
const vehicleRoutes = (require('./routes/vehicleRoutes'))

app.use('/vehicle', vehicleRoutes)

// Rota inicial / endpoint
app.get('/', (req, res) => {
    // mostrar req
})

// entregar uma porta
mongoose.connect('mongodb+srv://douglas:xDX2DPOU7lwXX1rL@cluster0.pqiavvu.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('conectado ao mongoDB! http://localhost:3000')
    app.listen(3000)
})
.catch((err) => console.log(err))
