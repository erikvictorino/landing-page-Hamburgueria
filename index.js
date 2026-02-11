import express from 'express'
import exphbs from 'express-handlebars'
import conn from './db/conn.js'
import Hamburguer from './models/Hamburguer.js'
import hamburguerRoutes from './routes/hamburguerRoutes.js'
import path from 'path'

const app = express()

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
app.use('/hamburguers', hamburguerRoutes)

app.use(function (req, res, next) {
    res.status(404).render('hamburguers/404')
})

conn
.sync()
.then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))