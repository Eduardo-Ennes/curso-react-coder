const express = require("express")
const app = express()
const db = require('../Database/connection')
const cors = require('cors')

const corsOptions = {
    origin: 'http://localhost:3000',  
};
app.use(cors(corsOptions));
// app.use(cors())



const bodyParse = require('body-parser')
app.use(bodyParse.urlencoded({extended: false}))
app.use(bodyParse.json())


app.post("/create", async (req, res) => {
    const pais = req.body.country
    const cidade = req.body.city
    if(pais != undefined && pais != '' && pais != ' ' &&
        cidade != undefined && cidade != '' && cidade != ' '
    ){
        try{
            const response = await db.insert({country: pais, city: cidade}).into('destinos')
            if(response){
                res.status(200).json({certo: "Adicionado com sucesso."})
                
            }
            else{
                res.status(406).json({err: "Erro ao adicionar um destino, tente novamente."})
            }
        }
        catch(err){
            res.status(406).json({err: "Erro ao adicionar um destino, tente novamente."})
        }
    }
    else{
        res.status(406).json({err: "Os campos devem ser obrigatoriamente preenchidos."})
    }
})



app.get('/destinos', async (req, res) => {
    try{
        const data = await db.select("*").table('destinos')
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({ message: 'Erro ao buscar dados!' });
        console.log(err)
    }
})



app.delete('/destinos/:id', async(req, res) => {
    const id = req.params.id
    if(id != undefined){
        try{
            const response = await db.where({id: id}).delete().table('destinos')
            if(response){
                res.status(200).json({certo: 'Excluido com sucesso.', red: true})
            }
            else{
                res.status(406).json({err: "Error ao excluir o destino, tente novamente."})
            }
        }
        catch(err){
            res.status(406).json({err: "Error ao excluir o destino, tente novamente."})
            console.log(err)
        }
    }else{
        res.status(406).json({err: "Error ao excluir o destino, tente novamente."})
    }
})


app.get('/user/:id', async(req, res) => {
    const id = req.params.id
    console.log(id)
    if(id != undefined){
        try{
            const response = await db.select().where({id: id}).table('destinos')
            if(response.length){
                res.status(200).json(response)
            }
            else{
                res.status(406).json({err: "Error ao encontrar o destino."})
            }
        }catch(err){
            console.log(err)
            res.status(406).json({err: "Error ao encontrar o destino."})
        }
    }
    else{
        res.status(406).json({err: "Error ao encontrar o destino."})
    }
})


app.put('/edit', async(req, res) => {
    const id = req.body.id
    const country = req.body.country
    const city = req.body.city
    try{
        const response = await db.where({id: id}).update({country: country, city: city}).table('destinos')
        const retorno = `Pais: ${country} - Cidade: ${city}`
        res.status(200).json({certo: retorno})
    }catch(err){
        console.log(err)
    }
})


app.listen(5000, () => {
    console.log('O servidor está rodando')
})