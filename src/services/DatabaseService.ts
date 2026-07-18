import 'dotenv/config';
import { Client } from 'pg';
import { sqlVerificarBanco, sqlNovoBanco, sqlVerificarTabelas, sqlNovasTabelas } from '../repositories/DatabaseRepository';

export const criarBanco = async () => {        
    // Configuração do Banco de Dados
    const novo_banco = process.env.PGDATABASE;
    const dbCreateDatabaseConfig = {
        host: process.env.PGHOST,
        port: Number(process.env.PGPORT),
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
    };

    // Conecta ao banco padrão 'postgres' para criar o novo banco
    const clienteInicial = new Client({
        ...dbCreateDatabaseConfig,
        database: 'postgres'
    }); 

    try{
        await clienteInicial.connect();
        // Verifica se o banco já existe
        const checkDb = await clienteInicial.query(sqlVerificarBanco,[novo_banco]);
        if (checkDb.rowCount === 0){
            // não existindo, vai criar aqui
            await clienteInicial.query(sqlNovoBanco + `${novo_banco}`);
            console.log(`Banco de dados "${novo_banco}" criado com sucesso!`);
        } else {
            // senão informa sua existência
            console.log(`Banco de dados "${novo_banco}" já existe`);
        }
    } catch (err) {
        console.log('Erro ao criar o banco de dados:', err) ;
        return;
    } finally {
        // encerra conexão do client
        await clienteInicial.end();
    }
}

export const criarTabelas = async () => {

    // Configuração do Banco de Dados
    const dbCreateTablesConfig = {
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    };
    
    // Conecta ao banco da aplicação para criar as tabelas
    const clienteTabelas = new Client({ ...dbCreateTablesConfig }); 

    try{
        await clienteTabelas.connect();
        // Verifica se as tabelas já existem
        const checkAutores = await clienteTabelas.query(sqlVerificarTabelas,['autores']);
        const checkLivros = await clienteTabelas.query(sqlVerificarTabelas,['livros']);
        const checkClientes = await clienteTabelas.query(sqlVerificarTabelas,['clientes']);
        const checkEmprestimos = await clienteTabelas.query(sqlVerificarTabelas,['emprestimos']);        
        if (checkAutores.rowCount === 0 || checkLivros.rowCount === 0 || checkClientes.rowCount === 0 || checkEmprestimos.rowCount === 0) {
            // não existindo, vai criar aqui
            await clienteTabelas.query(sqlNovasTabelas);
            console.log(`Tabelas criadas com sucesso!`);
        } else {
            // senão informa sua existência
            console.log(`Tabelas já existem`);
        }
    } catch (err) {
        console.log('Erro ao criar tabelas: ', err) ;
        return;
    } finally {
        // encerra conexão do client
        await clienteTabelas.end();
    }
}