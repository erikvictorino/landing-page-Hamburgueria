import Hamburguer from '../models/Hamburguer.js'

export default class HamburguerController{
    static createHamburguer(req, res){
        res.render('hamburguers/cadastro')
    }

    static async createHamburguerSave(req, res) {
        const data = {
            name: req.body.name,
            price: req.body.price,
            description:req.body.description,
            image: req.file.filename,
        }
        await Hamburguer.create(data)
        res.redirect('/hamburguers')
    }
    
    static async unicoHamburguer(req, res){
        const id = req.params.id

        const hamburguer = await Hamburguer.findOne({raw: true, where: {id: id}})
        res.render('hamburguers/hamburguer', { hamburguer })
    }

    static async updateHamburguer(req, res){
        const id = req.params.id
        const hamburguer = await Hamburguer.findOne({raw: true, where:{id: id}})

        res.render('hamburguers/editburguer', {hamburguer})
    }

    static async updateHamburguerSave(req, res){
        console.log(req.method)
        console.log(req.headers['content-type'])


        const id = req.body.id
        let data = {
            name: req.body.name, 
            price: req.body.price, 
            description: req.body.description
        }

        if(req.file){
            data.image = req.file.filename
        }

        await Hamburguer.update(data, {where: {id}})

        res.redirect('/hamburguers')
    }

    static async removeHamburguer(req, res){
        const id = req.body.id
        await Hamburguer.destroy({where: {id: id}})

        res.redirect('/hamburguers')
    }

    static async showHamburguers(req, res){
        const hamburguer = await Hamburguer.findAll({raw: true})

        res.render('hamburguers/cardapio', {hamburguer})
    }
}