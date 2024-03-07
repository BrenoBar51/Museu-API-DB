const DB = require("../database/index");
const tabela = "visitante";

async function cadastrar(data) {
  try {
    if (!data.nome) {
      throw new Error("Nome é obrigatório");
    }
    if (!data.cpf) {
      throw new Error("CPF é obrigatório");
    }
    if (!data.profissao) {
      throw new Error("Profissão é obrigatório");
    }
    if (!data.genero) {
      throw new Error("Genêro é obrigatório");
    }
    if (!data.idade) {
      throw new Error("Idade é obrigatório");
    }
    if (!data.cidade) {
      throw new Error("Cidade é obrigatório");
    }
    if (!data.bairro) {
      throw new Error("Bairro é obrigatório");
    } else {
      const result = await DB.execute(
        `INSERT INTO ${tabela} (visitante_nome, visitante_idade, visitante_profissao, visitante_genero, visitante_cidade, visitante_bairro, visitante_cpf) VALUES ('${data.nome}', ${data.idade},'${data.profissao}', '${data.genero}', '${data.cidade}','${data.bairro}','${data.cpf}');`
      );

      if (result.affectedRows > 0) {
        return {
          type: "success",
          message: "Visitante cadastrado com sucesso",
        };
      }

      return {
        type: "error",
        message: "Falha ao cadastar visitante",
      };
    }
  } catch (error) {
    return {
      type: "error",
      message: error.message,
    };
  }
}

async function listar() {
  return await DB.execute(`select * from ${tabela};`);
}

async function contarPorGenero() {
  return await DB.execute(`select count(visitante_id) as value, visitante_genero as name from ${tabela} group by visitante_genero;`);
}

async function contarPorCidade() {
  return await DB.execute(`select count(visitante_id) as value, visitante_cidade as name from ${tabela} group by visitante_cidade;`);
}

async function contarPorBairro() {
  return await DB.execute(`SELECT COUNT(visitante_id) AS VALUE, visitante_bairro AS NAME FROM ${tabela} WHERE visitante_cidade = 'Fortaleza' GROUP BY visitante_bairro;`);
}
module.exports = { cadastrar, listar, contarPorGenero, contarPorCidade, contarPorBairro };