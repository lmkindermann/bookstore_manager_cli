export async function verificarBanco(clienteInicial: any, novo_banco: string|undefined): Promise<void> {
    const result = await clienteInicial.query(sqlVerificarBanco,[novo_banco]);
    return result;
}

export async function novoBanco(clienteInicial: any, novo_banco: string|undefined): Promise<void> {
    const result = await clienteInicial.query(sqlNovoBanco + `${novo_banco}`);
    return result;
}

export async function verificarTabelas(clienteTabelas: any): Promise<boolean> {
    let result: boolean;
    const checkAutores = await clienteTabelas.query(sqlVerificarTabelas,['autores']);
    const checkLivros = await clienteTabelas.query(sqlVerificarTabelas,['livros']);
    const checkClientes = await clienteTabelas.query(sqlVerificarTabelas,['clientes']);
    const checkEmprestimos = await clienteTabelas.query(sqlVerificarTabelas,['emprestimos']);  
    if (checkAutores.rowCount === 0 || checkLivros.rowCount === 0 || checkClientes.rowCount === 0 || checkEmprestimos.rowCount === 0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

export async function novasTabelas(clienteTabelas: any): Promise<void> {
    const result = await clienteTabelas.query(sqlNovasTabelas);
    return result;
}

export const sqlVerificarBanco = `SELECT 1 FROM pg_database WHERE datname = $1`

export const sqlNovoBanco = `CREATE DATABASE `

export const sqlVerificarTabelas = `SELECT 1 FROM pg_tables WHERE tablename = $1`

export const sqlNovasTabelas = `
    CREATE TABLE IF NOT EXISTS autores(
        id				SERIAL PRIMARY KEY,
        nome			VARCHAR(150) NOT NULL UNIQUE,
        nacionalidade	VARCHAR(100),
        criado_em		TIMESTAMP DEFAULT NOW() 
    );

    CREATE TABLE IF NOT EXISTS livros(
        id			SERIAL PRIMARY KEY,
        autor_id	INTEGER NOT NULL,
        titulo		VARCHAR(150) NOT NULL,
        ano			NUMERIC(4),
        categoria 	VARCHAR(100),
        estoque		INTEGER NOT NULL,
        quantidade	INTEGER NOT NULL,        
        criado_em	TIMESTAMP DEFAULT NOW(),

        CONSTRAINT fk_livros_autor
            FOREIGN KEY (autor_id)
            REFERENCES autores(id)
            ON DELETE CASCADE,
        
        CONSTRAINT chk_quantidade_maxima CHECK (quantidade <= estoque),
	    CONSTRAINT chk_quantidade_minima CHECK (quantidade > 0),
	    CONSTRAINT chk_estoque_minimo CHECK (estoque > 0)
    );

    CREATE TABLE IF NOT EXISTS clientes(
        id			SERIAL PRIMARY KEY,
        nome		VARCHAR(150) NOT NULL UNIQUE,
        cpf			CHAR(11) UNIQUE CHECK (LENGTH(cpf) = 11),
        data_nasc	DATE,
        telefone	VARCHAR(20),
        email       VARCHAR(150) NOT NULL UNIQUE,
        criado_em	TIMESTAMP DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS emprestimos(	
        cliente_id		INTEGER,
        livro_id		INTEGER,
        data_devolucao	DATE,
        data_emprestimo DATE DEFAULT NOW(),

        CONSTRAINT pk_emprestimos
            PRIMARY KEY (cliente_id, livro_id),

        CONSTRAINT fk_emprestimos_cliente
            FOREIGN KEY (cliente_id)
            REFERENCES clientes(id)
            ON DELETE RESTRICT,

        CONSTRAINT fk_emprestimos_livro
            FOREIGN KEY (livro_id)
            REFERENCES livros(id)
            ON DELETE RESTRICT,

        CONSTRAINT chk_devolucao CHECK (data_devolucao > data_emprestimo)
    );
`