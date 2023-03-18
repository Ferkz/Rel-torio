const mongoose = require('../../dbConnect')

const modeloSchema = new mongoose.Schema({
    setor:{
        type: String,
        require: true,

    },
    data:{
        type: String,
        require: true
    },
    ip:{
        type: String,
        require: true
    },
    modelo:{
        type: String,
        require:true
    },
    anterior:{
        type:String,
        require: true
    },
    atual:{
        type:String,
        require: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})
const modelo = mongoose.model('modelos', modeloSchema);
module.exports = modelo;