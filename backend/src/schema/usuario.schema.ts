import { Schema, model } from "mongoose"

const usuarioSchema = new Schema({
    nome: String,
    senha: String
})

export default model("usuario", usuarioSchema)