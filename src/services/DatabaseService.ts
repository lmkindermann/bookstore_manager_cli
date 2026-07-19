import 'dotenv/config';
import { Client } from 'pg';
import { verificarBanco, novoBanco, verificarTabelas, novasTabelas } from '../repositories/DatabaseRepository';

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
        let result: any = await verificarBanco(clienteInicial, novo_banco);        
        if (result.rowCount === 0){
            // não existindo, vai criar aqui
            result = await novoBanco(clienteInicial, novo_banco);
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
        let result: any = await verificarTabelas(clienteTabelas);
        if (result === true) {
            // não existindo, vai criar aqui
            result = await novasTabelas(clienteTabelas);
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