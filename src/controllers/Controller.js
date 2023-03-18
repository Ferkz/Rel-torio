const Modelo = require('../models/modelo')
require('../models/modelo')

module.exports = class Controller {
    static index = async (req,res)=>{
        const modelos = await Modelo.find()
        console.log(modelos);
        res.render('./index.ejs',{
            modelos:modelos
        })
    }
    static criarModelo = async (req,res)=>{
        try {
            const setor = req.body.setor
            const data =  req.body.data
            const ip = req.body.ip
            const modelo = req.body.modelo
            const anterior =  req.body.anterior
            const atual = req.body.atual
            const errors = []
            if(errors.length <=0){
                errors.push('Dados enviados com sucesso')
            }
            console.log(errors);
            const novoModelo = ({setor,data,ip,modelo,anterior,atual})
            new Modelo(novoModelo).save()
            res.redirect('/') 
        } catch (error) {
            return res.status(400).send ({error: 'Falha ao criar modelo'+error});
            
        }
    }
}