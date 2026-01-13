/*
[feito] colocar itens no banco
[feito] mostrar os itens do banco no front
[feito] mostrar cada hamburguer separado
[feito] atualizar os itens da tabela
[] deletar os itens da tabela
*/ 

import express from 'express'
import exphbs from 'express-handlebars'
import pool from './db/conn.js'
import multer from 'multer'

const app = express()
const port = 3000
const upload = multer({dest: "uploads/"})

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('hamburguers')
})

app.get('/cadastro', (req, res) => {
    res.render('cadastro')
})

app.post('/hamburguer/insertburguer', (req, res) => {
    const name = req.body.name
    const price = req.body.price
    const description = req.body.description
    const sql = 'INSERT INTO hamburguer (name, price, description) VALUES (?, ?, ?)'
    const data = [name, price, description]

    pool.query(sql, data, function(err) {
        if(err){
            console.log(err)
            return
        }
        res.redirect('/hamburguers')
    })
})

//rota para mostar todos os hambuguers 
app.get('/hamburguers', (req, res) => {
    const sql = "SELECT * FROM hamburguer"

    pool.query(sql, function(err, data) {
        if(err){
            console.log(err)
            return
        }
        const hamburguers = data
        res.render('hamburguers', {hamburguers})
    })
})

//rota para mostrar hamburguers separadamente pelo id
app.get('/hamburguer/:id', (req, res) => {
    const id = req.params.id
    const sql = 'SELECT * FROM hamburguer WHERE id = ?'

    pool.query(sql, [id], function(err, data) {
        if(err){
            console.log(err)
            return
        }
        const hamburguer = data[0]
        res.render('hamburguer', {hamburguer})
    })

})


app.get('/hamburguers/edit/:id', (req, res) => {
    const id = req.params.id
    const sql = 'SELECT * FROM hamburguer WHERE id = ?'
    
    pool.query(sql, [id], function(err, data) {
        if(err){
            console.log(err)
            return
        }
        const hamburguer = data[0]
        res.render('editburguer', {hamburguer})
    })
})

app.post('/hamburguers/updateburguer', (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const price = req.body.price
    const description = req.body.description
    const sql = 'UPDATE hamburguer SET name = ?, price = ?, description = ? WHERE id = ?'
    const data = [name, price, description, id]

    pool.query(sql, data, function(err) {
        if(err){
            console.log(err)
            return
        }
        res.redirect('/hamburguers')
    })
})

app.post('/hamburguers/remove/:id', (req, res) => {
    const id = req.params.id
    const sql = 'DELETE FROM hamburguer WHERE id = ?'

    pool.query(sql, [id], function(err) {
        if(err){
            console.log(err)
            return
        }
        res.redirect('/hamburguers')
    })
})

app.use(function(req, res, next) {
    res.status(404).render('404')
})

app.listen(port, () => {
    console.log(`servidor rodando na porta 3000`)
})