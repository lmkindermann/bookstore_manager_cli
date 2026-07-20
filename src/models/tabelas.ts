import { AuthorResume, BookResume } from '../models/interfaces';

export function tabelaAutores(dados: any) {
    // Largura fixa para cada coluna (em número de caracteres)
    const tamId = 6;
    const tamNome = 30;
    const tamNacionalidade = 20;
    const tamCriadoEm = 30;

    // Cabeçalho alinhado
    const headId = 'ID'.padEnd(tamId);
    const headNome = 'Nome'.padEnd(tamNome);
    const headNacionalidade = 'Nacionalidade'.padEnd(tamNacionalidade);
    const headCriadoEm = 'Criado Em'.padEnd(tamCriadoEm)

    console.log(`${headId} | ${headNome} | ${headNacionalidade} | ${headCriadoEm}`);
    console.log('-'.repeat(tamId + tamNome + tamNacionalidade + tamCriadoEm + 6));

    // Linhas de dados alinhadas
    dados.rows.forEach((row: AuthorResume) => {  
    const strId = String(row.id).padEnd(tamId);
    const strNome = row.nome.padEnd(tamNome);
    const strNacionalidade = row.nacionalidade.padEnd(tamNacionalidade);
    const strCriadoEm = String(row.criado_em).padEnd(tamCriadoEm);
    
    console.log(`${strId} | ${strNome} | ${strNacionalidade} | ${strCriadoEm}`);
    });
}

export function tabelaLivros(dados: any) {
    // Largura fixa para cada coluna (em número de caracteres)
    const tamId = 6;
    const tamTitulo = 30;
    const tamAutor = 30;
    const tamAno = 10;
    const tamCategoria = 20;
    const tamEstoque = 12;
    const tamQuantidade = 12;
    const tamCriadoEm = 30;

    // Cabeçalho alinhado
    const headId = 'ID'.padEnd(tamId);
    const headTitulo = 'Título'.padEnd(tamTitulo);
    const headAutor = 'Autor'.padEnd(tamAutor);
    const headAno = 'Ano'.padEnd(tamAno);
    const headCategoria = 'Categoria'.padEnd(tamCategoria);
    const headEstoque = 'Estoque'.padEnd(tamEstoque);
    const headQuantidade = 'Quantidade'.padEnd(tamQuantidade);
    const headCriadoEm = 'Criado Em'.padEnd(tamCriadoEm);

    console.log(`${headId} | ${headTitulo} | ${headAutor} | ${headAno} | ${headCategoria} | ${headEstoque} | ${headQuantidade} | ${headCriadoEm}`);
    console.log('-'.repeat(tamId + tamTitulo + tamAutor + tamAno + tamCategoria + tamEstoque + tamQuantidade + tamCriadoEm + 6));

    // Linhas de dados alinhadas
    dados.rows.forEach((row: BookResume) => {  
    const strId = String(row.id).padEnd(tamId);
    const strTitulo = row.titulo.padEnd(tamTitulo);
    const strAutor = String(row.autor_id).padEnd(tamAutor); //Nome Autor ao invés do ID
    const strAno = String(row.ano).padEnd(tamAno);
    const strCategoria = row.categoria.padEnd(tamCategoria);
    const strEstoque = String(row.estoque).padEnd(tamEstoque);
    const strQuantidade = String(row.quantidade).padEnd(tamQuantidade);
    const strCriadoEm = String(row.criado_em).padEnd(tamCriadoEm);
    
    console.log(`${strId} | ${strTitulo} | ${strAutor} | ${strAno} | ${strCategoria} | ${strEstoque} | ${strQuantidade} | ${strCriadoEm}`);
    });
}