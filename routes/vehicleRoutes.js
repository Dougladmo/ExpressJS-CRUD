const router = require('express').Router()
const Vehicle = require('../models/Vehicle')

// Create - criação de dados
router.post('/', async (req, res) => {
    // req.body
    const { marca, modelo, ano, km, cor, tipo, tipoDeCombustivel, portas, blindado } = req.body

    if(!marca || modelo || ano || km || cor || tipo || tipoDeCombustivel || portas || blindado ) {
        res.status(422).json({ error: 'Preencha todos os campos.' })
        return
    }

    const vehicle = {
        marca, 
        modelo, 
        ano, 
        km, 
        cor, 
        tipo, 
        tipoDeCombustivel, 
        portas, 
        blindado,
    }

    // create
    try {

        // criando dados
        await Vehicle.create(vehicle)

        res.status(201).json({message: 'Veículo inserida no sistema com sucesso!'})

    } catch (error) {
        res.status(500).json({error: error})
    }

})

// Read - leitura de dados

router.get('/', async (req, res) => {

    try{
        const people = await Vehicle.find()

        res.status(200).json(people)

    } catch (error) {
        res.status(500).json({error: error})
    }
 
})

router.get('/:id',  async (req, res) => {
    const id = req.params.id

    try {
        const vehicle = await Vehicle.findOne({_id: id})

        if(!vehicle) {
            res.status(422).json({ error: 'Veículo não encontrado!' })
            return
        }    

        res.status(200).json(vehicle)

    } catch (error) {
        res.status(500).json({error: error})
    }

})

// Update - atualização de dados (PUT, PATCH)
router.patch('/:id', async (req, res) => {

    const id = req.params.id

    const {  marca, modelo, ano, km, cor, tipo, tipoDeCombustivel, portas, blindado  } = req.body

    const vehicle = {
        marca, 
        modelo, 
        ano, 
        km, 
        cor, 
        tipo, 
        tipoDeCombustivel, 
        portas, 
        blindado
    } 

    try {
        
        const updatedVehicle = await Vehicle.updateOne({ _id: id }, vehicle)

        res.status(200).json({ message: "atualizado com sucesso!!"})


    } catch (error) {
        res.status(500).json({error: error})
    }
})

// Delete - deletar dados 
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const vehicle = await Vehicle.findOne({_id: id})

    if(!vehicle) {
        res.status(422).json({ error: 'Veículo não encontrado!' })
        return
    }
    
    try {

        await Vehicle.deleteOne({_id: id})
        res.status(200).json({message: "removido com sucesso!!"})

    } catch (error) {
        res.status(500).json({error: error})
    }


})

module.exports = router
