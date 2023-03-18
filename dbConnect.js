const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1/relatorio").then(()=>{
    console.log("conectado ao mongodb");
}).catch((erro) =>{
    console.log("houve um erro: "+erro);
})
module.exports = mongoose