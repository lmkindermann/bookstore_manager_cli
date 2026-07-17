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

