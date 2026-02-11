import express from 'express'
import HamburguerController from '../controllers/HamburguerController.js'
import upload from '../middlewares/upload.js'
const router = express.Router()

router.get('/cadastro', HamburguerController.createHamburguer)

router.post('/cadastro', upload.single("image"), HamburguerController.createHamburguerSave)

router.get('/hamburguer/:id', HamburguerController.unicoHamburguer)

router.get('/edit/:id', HamburguerController.updateHamburguer)

router.post('/edit', upload.single("image"), HamburguerController.updateHamburguerSave)

router.post('/remove', HamburguerController.removeHamburguer)

router.get('/', HamburguerController.showHamburguers)

export default router