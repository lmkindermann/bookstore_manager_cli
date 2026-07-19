import { rl, rlPause } from '../utils/readlineConfig';
import { pool } from '../database/databaseConnection';

export async function cadastrarAutor(): Promise<void> {
    try {
        // conexão com pool
        const nome: string = await rl.question('Digite o nome do autor: ');
        // busca pelo nome dentro da tabela autor
        let result: any = await pool.query(`SELECT nome FROM autores WHERE nome = $1`,[nome]);
        if (result.rowCount > 0) {
            //verificar se o autor já existe no banco de dados
            console.log(`Autor "${nome}" já existe no banco de dados.`);
        } else { 
            //se não existir, cadastra o autor no banco de dados
            const nacionalidade: string = await rl.question('Digite a nacionalidade do autor: ');
            result = await pool.query(`INSERT INTO autores (nome, nacionalidade) VALUES ($1, $2)`,[nome, nacionalidade]);
            console.log(result);
            console.log(`Autor "${nome}" cadastrado com sucesso!`);   
        }                 
    } catch (error) {
        //tratar erros e exibir mensagens de sucesso ou falha
        console.error('Erro ao cadastrar autor: ', error);            
    }
}