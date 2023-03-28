const { addListener } = require('../models/modelo')
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

            const novoModelo = ({setor,data,ip,modelo,anterior,atual})
            new Modelo(novoModelo).save()
            res.redirect('/') 

            
        } catch (error) {
            return res.status(400).send ({error: 'Falha ao criar modelo'+error});
            
        }
    }
    static deletar = async (req,res) =>{
        try {
            const deletarSetor = await Modelo.findByIdAndDelete({_id: req.params.id})
            if (!deletarSetor){
                return res.status(404).send('modelo não encontrado')
            }
            res.send('dados deletados com sucesso')
        }catch(error) {
            res.status(500).send('Erro interno do servidor', error)
        }
    }
}