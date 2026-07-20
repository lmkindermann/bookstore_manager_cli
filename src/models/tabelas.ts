import { AuthorResume, BookResume, CustomerResume } from '../models/interfaces';

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
    const tamAutor = 30;
    const tamTitulo = 30;    
    const tamAno = 6;
    const tamCategoria = 20;
    const tamEstoque = 10;
    const tamQuantidade = 12;
    const tamCriadoEm = 30;

    // Cabeçalho alinhado
    const headId = 'ID'.padEnd(tamId);
    const headAutor = 'Autor'.padEnd(tamAutor);
    const headTitulo = 'Título'.padEnd(tamTitulo);    
    const headAno = 'Ano'.padEnd(tamAno);
    const headCategoria = 'Categoria'.padEnd(tamCategoria);
    const headEstoque = 'Estoque'.padEnd(tamEstoque);
    const headQuantidade = 'Quantidade'.padEnd(tamQuantidade);
    const headCriadoEm = 'Criado Em'.padEnd(tamCriadoEm);

    console.log(`${headId} | ${headAutor} | ${headTitulo} | ${headAno} | ${headCategoria} | ${headEstoque} | ${headQuantidade} | ${headCriadoEm}`);
    console.log('-'.repeat(tamId + tamAutor + tamTitulo + tamAno + tamCategoria + tamEstoque + tamQuantidade + tamCriadoEm + 6));

    // Linhas de dados alinhadas
    dados.rows.forEach((row: BookResume) => {  
    const strId = String(row.id).padEnd(tamId);
    const strAutor = row.autor.padEnd(tamAutor);
    const strTitulo = row.titulo.padEnd(tamTitulo);
    const strAno = String(row.ano).padEnd(tamAno);
    const strCategoria = row.categoria.padEnd(tamCategoria);
    const strEstoque = String(row.estoque).padEnd(tamEstoque);
    const strQuantidade = String(row.quantidade).padEnd(tamQuantidade);
    const strCriadoEm = String(row.criado_em).padEnd(tamCriadoEm);
    
    console.log(`${strId} | ${strAutor} | ${strTitulo} | ${strAno} | ${strCategoria} | ${strEstoque} | ${strQuantidade} | ${strCriadoEm}`);
    });
}

export function tabelaClientes(dados: any) {
    // Largura fixa para cada coluna (em número de caracteres)
    const tamId = 6;
    const tamNome = 30;
    const tamCpf = 15;
    const tamDataNasc = 20;
    const tamTelefone = 15;
    const tamEmail = 30;
    const tamCriadoEm = 30;

    // Cabeçalho alinhado
    const headId = 'ID'.padEnd(tamId);
    const headNome = 'Nome'.padEnd(tamNome);
    const headCpf = 'CPF'.padEnd(tamCpf);
    const headDataNasc = 'Data Nascimento'.padEnd(tamDataNasc);
    const headTelefone = 'Telefone'.padEnd(tamTelefone);
    const headEmail = 'E-Mail'.padEnd(tamEmail);
    const headCriadoEm = 'Criado Em'.padEnd(tamCriadoEm);

    console.log(`${headId} | ${headNome} | ${headCpf} | ${headDataNasc} | ${headTelefone} | ${headEmail} |${headCriadoEm}`);
    console.log('-'.repeat(tamId + tamNome + tamCpf + tamDataNasc + tamTelefone + tamEmail + tamCriadoEm + 6));

    // Linhas de dados alinhadas
    dados.rows.forEach((row: CustomerResume) => {  
    const strId = String(row.id).padEnd(tamId);
    const strNome = row.nome.padEnd(tamNome);
    const strCpf = row.cpf.padEnd(tamCpf);
    const strDataNasc = String(row.data_nasc).padEnd(tamDataNasc);
    const strTelefone = row.telefone.padEnd(tamTelefone);
    const strEmail = row.email.padEnd(tamEmail);
    const strCriadoEm = String(row.criado_em).padEnd(tamCriadoEm);
    
    console.log(`${strId} | ${strNome} | ${strCpf} | ${strDataNasc} | ${strTelefone} | ${strEmail} | ${strCriadoEm}`);
    });
}