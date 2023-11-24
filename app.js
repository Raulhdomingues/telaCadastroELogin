import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import { loginModel, registerModel } from './models/db.js'
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
const PORT = 3000;


//forma de ler JSON / middlewares ... permite mandar e receber arquivo json
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

dotenv.config();
//escutar uma porta 
const DB_USER = 'raulhdomingues'
const DB_PASSWORD = encodeURIComponent('lhibqFF9O4hGj3xp')


mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@minhaapi.f2gheg5.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log('Conectamos ao MongoDB!')
    app.listen(PORT)
})
.catch((err) => console.log(err))



app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = await registerModel.create({
            name: name,
            email: email,
            password: password
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        res.status(500).json({ error: 'Erro ao registrar usuário' });
    }
});






// app.post('/login', async (req, res) => {
//     const loginModel = new loginSchema({
//         email: req.body.email,
//         password: req.body.password,
//     });
//     try {
//         await loginModel.save();
//     } catch (err) {
//         console.error(err);
//     }
//     // req.body.email
//     // // res.send(`Email: ${req.body.email} Senha: ${req.body.password}`)
// })


//rotas 
// app.post('/login', async(req,res) => {
//     const {email, password} = req.body

//     try {
//         await login.create(login)

//         res.status(201).json({message: 'Login realizado com sucesso!'});

//     } catch (error) {
//         res.status(500).json({ error: error })
//     }
    
// })




