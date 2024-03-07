const DB = require("../database/index");
const tabela = "usuario";

async function listar() {
  return await DB.execute(`SELECT * FROM ${tabela};`);
}

async function listarUM(id) {
  return await DB.execute(`SELECT * FROM ${tabela} WHERE brand_id = ${id};`);
}

async function logar(data) {
  try {
    if (!data.email) {
      throw new Error("Email é obrigatório");
    }
    if (!data.password) {
      throw new Error("Senha é obrigatório");
    }

    const response = await DB.execute(`SELECT * FROM usuario WHERE usuario_email = '${data.email}' AND usuario_senha = '${data.password}';`)
    
    if(response.length == 0){
      return {
        type: "warning",
        message: "Usuário ou senha estão incorretos",
      };
    }

    return{
        type:"success",
        message:"OK"
    }

  } catch (error) {
    return {
      type: "error",
      message: error.message,
    };
  }
}

module.exports = {
  logar,
  listar,
  listarUM,
};
