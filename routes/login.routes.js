import express from "express";
import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const login = express.Router();

login.post('/', async (req, res) => {
    const { email, password } = req.body;

    const registeredUser = await User.findOne(
        { where: { email }}
    ).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

    if (!registeredUser)
        return res
            .status(400)
            .json({message: "Email ou Senha inválidos."})

    if (!bcrypt.compareSync(password, registeredUser.password) )
        return res
            .status(400)
            .json({message: "Email ou Senha inválidos."})
    
    const token = jwt.sign(
        {
            id: registeredUser.id,
            name: registeredUser.name,
            admin: registeredUser.admin
        }, 
        process.env.JWT_SECRET,
        {
            expiresIn: '1h'
        }
    );

    res.json({
        message: "Bem-vindo!",
        token: token
    })


});

export default login;