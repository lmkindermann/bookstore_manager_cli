export const sqlVerificarBanco = `SELECT 1 FROM pg_database WHERE datname = $1`

export const sqlNovoBanco = `CREATE DATABASE `

export const sqlVerificarTabelas = `SELECT 1 FROM pg_tables WHERE tablename = $1`;

export const sqlNovasTabelas = `
    CREATE TABLE IF NOT EXISTS  autores(
        id				SERIAL PRIMARY KEY,
        nome			VARCHAR(150) NOT NULL UNIQUE,
        nacionalidade	VARCHAR(100),
        criado_em		TIMESTAMPTZ DEFAULT NOW() 
    );

    CREATE TABLE IF NOT EXISTS livros(
        id			SERIAL PRIMARY KEY,
        autor_id	INTEGER NOT NULL,
        titulo		VARCHAR(150) NOT NULL,
        ano			NUMERIC(4),
        categoria 	VARCHAR(100),
        quantidade	INTEGER NOT NULL,
        estoque		INTEGER NOT NULL,
        criado_em	TIMESTAMPTZ DEFAULT NOW(),

        CONSTRAINT fk_livros_autor
            FOREIGN KEY (autor_id)
            REFERENCES autores(id)
            ON DELETE CASCADE 
    );

    CREATE TABLE IF NOT EXISTS  clientes(
        id			SERIAL PRIMARY KEY,
        nome		VARCHAR(150) NOT NULL UNIQUE,
        cpf			CHAR(11) UNIQUE CHECK (LENGTH(cpf) = 11),
        data_nasc	DATE,
        telefone	VARCHAR(20),
        criado_em	TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS  emprestimos(	
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
            ON DELETE RESTRICT
    );
`;