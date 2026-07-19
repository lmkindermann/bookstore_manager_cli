import { verificarAutor, inserirAutor } from '../repositories/AutorRepository';
import { rl } from '../utils/readlineConfig';

export async function cadastrarAutor(): Promise<void> {
    try {
        const nome: string = await rl.question('Digite o nome do autor: ');
        let result: any = verificarAutor(nome);
        if (result.rowCount > 0) {
            //verificar se o autor já existe no banco de dados
            console.log(`Autor "${nome}" já existe no banco de dados.`);
        } else { 
            //se não existir, cadastra o autor no banco de dados
            const nacionalidade: string = await rl.question('Digite a nacionalidade do autor: ');
            result = inserirAutor(nome, nacionalidade);
            console.log(`Autor "${nome}" cadastrado com sucesso!`);
        }                 
    } catch (error) {
        console.error('Erro ao cadastrar autor: ', error);            
    }
}