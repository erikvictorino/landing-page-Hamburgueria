import express from 'express'
import exphbs from 'express-handlebars'
import conn from './db/conn.js'
import Hamburguer from './models/Hamburguer.js'
import multer from 'multer'
import path from 'path'

const app = express()
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage })

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())
app.use(express.static('public'))
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')))

app.get('/cadastro', (req, res) => {
    res.render('cadastro')
})

app.post('/hamburguer/insertburguer', upload.single("image"), async (req, res) => {
    const name = req.body.name
    const price = req.body.price
    const description = req.body.description
    const image = req.file.filename
    const data = {name, price, description, image}

    await Hamburguer.create(data)

    res.redirect('/')
})

//rota para mostrar hamburguers separadamente pelo id
app.get('/hamburguer/:id', async (req, res) => {
    const id = req.params.id

    const hamburguer = await Hamburguer.findOne({raw: true, where: {id: id}})
    res.render('hamburguer', { hamburguer })
})

app.post('/hamburguers/remove/:id', async (req, res) => {
    const id = req.params.id
    await Hamburguer.destroy({where: {id: id}})
    res.redirect('/')
})

app.get('/hamburguers/edit/:id', async (req, res) => {
    const id = req.params.id
    const hamburguer = await Hamburguer.findOne({raw: true, where:{id: id}})
    res.render('editburguer', {hamburguer})
})

app.post('/hamburguers/updateburguer', upload.single("image"), async (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const price = req.body.price
    const description = req.body.description
    let data = {name, price, description}

    if(req.file){
        data.image = req.file.filename
    }

    await Hamburguer.update(data, {where: {id}})

    res.redirect('/')
})

app.get('/', async (req, res) => {
    const hamburguer = await Hamburguer.findAll({raw: true})

    res.render('hamburguers', {hamburguer})
})

app.use(function (req, res, next) {
    res.status(404).render('404')
})

conn
.sync()
.then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))