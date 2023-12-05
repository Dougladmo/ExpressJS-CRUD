const mongoose = require('mongoose')

// marca, modelo, ano, km, cor, Tipo, tipo de combustivel, blindado, portas, recursos
const Vehicle = mongoose.model('Vehicle', {
    marca: String,
    modelo: Number,
    ano: Number,
    km: Number,
    cor: String,
    tipo: String,
    tipoDeCombustivel: String,
    portas: Number,
    blindado: Boolean,
})

module.exports = Vehicle