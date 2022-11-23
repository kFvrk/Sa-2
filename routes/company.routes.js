import express from "express";
import Company from '../models/Company.js'

const company = express.Router();

company.get('/', (req, res) => {
    res.send('Rota de Empresas');
});

company.post("/register", async (req, res) => {
    
    const { name, cnpj, address } = req.body;

    const alreadyExistsCompany = await Company.findOne({ where: { name } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

    if (alreadyExistsCompany) {
        return res.status(409).json({ message: "Company already registered!" });
    }

    const newCompany = new Company({ name, cnpj, address });
    const savedCompany = await newCompany.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Sorry! Could not register the company" });
    });

    if (savedCompany) res.json({ message: "New Company Registered!" });
});

company.get('/find', async (req, res) => {
    const companies = await Company.findAll().catch(
        (err) => {
            console.log(err)
        }
    );

    if (companies){
        return res.json({companies})
    } else {
        return null
    }
})

export default company;