const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const router = express.Router()

router.post("/register", async (req, res) => {
    try {
        const { name, email, password, role} = req.body

        const hashedPassword = await bcrypt.hash(password, 10)
        
        const existingUser = await User.findOne({ where:  { email } })
        if(existingUser) {
            return res.status(400).json({ error: "Email already registered"})
        }

        await User.create({
            name, 
            email, 
            password: hashedPassword,
            role: role || 'user'
        })

        res.status(201).json({ message: "User sucessfully registered"})

    } catch (error) {
        console.log('Erro ao registrar usuário: ', error.message)
        res.status(500).json({ error: "Erro ao registrar usuário" })
    }
})


router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" })
        }

        const userRegistered = await User.findOne({ where: { email } })
        if (!userRegistered) {
            return res.status(400).json({ error: "Email not found" }) // Adicione o return aqui
        }

        const isValidPassword = await bcrypt.compare(password, userRegistered.password) // Corrigido para userRegistered
        if (!isValidPassword) {
            return res.status(400).json({ error: "Invalid password" })
        }

        const token = jwt.sign({ id: userRegistered.id, role: userRegistered.role }, 'secret', { expiresIn: '3h' }) // Corrigido para userRegistered
        res.status(200).json({ token })

    } catch (error) {
        console.error('Erro ao logar', error.message)
        res.status(500).json({ error: 'Erro ao logar' })
    }
})



module.exports = router