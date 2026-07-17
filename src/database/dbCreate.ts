import 'dotenv/config';
import { Client } from 'pg';

// Configuração do Banco de Dados
const novo_banco = process.env.PGDATABASE;
const dbConfig = {
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
};

export const criarBanco = async () => {
    // Conecta ao banco padrão 'postgres' para criar o novo banco
    const clienteInicial = new Client({
        ...dbConfig,
        database: 'postgres'
    }); 

    try{
        await clienteInicial.connect();
        // Verifica se o banco já existe (evitar erro)
        const checkDb = await clienteInicial.query(`SELECT 1 FROM pg_database WHERE datname = $1`,[novo_banco]);
        if (checkDb.rowCount === 0){
            // não existindo, vai criar aqui
            await clienteInicial.query(`CREATE DATABASE ${novo_banco}`);
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

// Teste
// criarBanco();
// Para testar, executar com:
// npx ts-node src/database/connection.ts
// npx tsx src/database/connection.ts