import express from "express";
import Model from '../models/Model.js';
import Company from '../models/Company.js';
import User from "../models/User.js";

const model = express.Router();

model.get('/', (req, res) => {
    res.send('Rota de Modelos');
});

model.post("/register", async (req, res) => {

    const { idUser, idCompany, name, age, email } = req.body;

    const newModel = new Model({ idUser, idCompany, name, age, email });
    const savedModel = await newModel.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Sorry! Could not register the Model" });
    });

    if (savedModel) res.json({ message: "New Model Registered!" });
});

model.get('/findByCompany', async (req, res) => {
    const idCompany = req.query.idCompany;
    const models = await Model.findAll({
        where: {
            idCompany: idCompany
        },
        include: [{model: User}]
    }).catch(
        (err) => {
            console.log(err)
        }
    );

    if (models) {
        return res.json({ models })
    } else {
        return null
    }
})

model.get('/findByUser', async (req, res) => {
    const idUser = req.query.idUser;
    const models = await Model.findAll({
        where: {
            idUser: idUser
        },
        include: [{model: Company}]
    }).catch(
        (err) => {
            console.log(err)
        }
    );

    if (models) {
        return res.json({ models })
    } else {
        return null
    }
})

model.get('/find', async (req, res) => {
    const models = await Model.findAll({
        include: [{model: Company}]
    }).catch(
        (err) => {
            console.log(err)
        }
    );

    if (models) {
        return res.json({ models })
    } else {
        return null
    }
})

export default model;  