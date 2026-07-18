import 'dotenv/config';
import { Pool } from 'pg';

// Configuração da Conexão
export const pool = new Pool({
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('error',(err) => {
    console.error('Erro inesperado no pool', err);
});

export const connectToDatabase = async () => {
    try {
        const client = await pool.connect();
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
        client.release(); // Libera o cliente de volta para o pool
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        //if (error.code === '3D000') {
        //    console.log('AVISO! Banco de dados inexistente. Utilize o comando 5.1. para criá-lo.');
        //    console.log('Na sequencia, reinicie a aplicação para verificar a conexão com o banco de dados.');
        //} else {
        //    console.error('Erro ao conectar ao banco de dados:', error);
        //}
    }
}


// Descomente para testar a conexão
/*
async function main(){
    const result = await pool.query('SELECT NOW()');
    console.log(result.rows[0]);
}
*/

// Teste
// main();
// Para testar, executar com:
// npx ts-node src/database/connection.ts
// npx tsx src/database/connection.ts

