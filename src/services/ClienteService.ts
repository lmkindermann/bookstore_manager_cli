import { rl } from '../utils/readlineConfig';
import { verificarCliente, inserirCliente, listaClientes, buscaCliente, atualizarCliente, removerCliente } from '../repositories/ClienteRepository';
import { tabelaClientes } from '../models/tabelas';
import { copyFile } from 'node:fs';

export async function novoCliente(): Promise<void> {
    try {
        const nome: string = await rl.question('Digite o nome do cliente: ');
        let result: any = await verificarCliente(nome);
        if (result.rowCount > 0) {
            console.log(`Autor "${nome}" já existe no banco de dados.`);
        } else {            
            const cpf: string = await rl.question('Digite o CPF do cliente: ');
            const data_nasc: string = await rl.question('Digite a data de nascimento do cliente: ');
            const telefone: string = await rl.question('Digite o telefone do cliente: ');
            const email: string = await rl.question('Digite o e-mail do cliente: ');
            result = await inserirCliente(nome, cpf, data_nasc, telefone, email);
            console.log(`Cliente "${nome}" cadastrado com sucesso!`);
        }                 
    } catch (error) {
        console.error('Erro ao cadastrar cliente: ', error);            
    }
}

export async function mostrarClientes(): Promise<void> {
    try {
        let result: any = await listaClientes();
        if (result.rowCount === 0) {
            console.log("A lista de clientes está vazia.");
        } else {
            tabelaClientes(result);
        }        
    } catch (error) {
        console.error('Erro ao listar clientes: ', error);            
    }
}

export async function consultaCliente(): Promise<void> {
    try {
        const nome: string = await rl.question('Digite o nome do cliente: ');
        let result: any = await buscaCliente(nome);
        if (result.rowCount === 0) {
            console.log("Cliente não encontrado.");
        } else {
            tabelaClientes(result);
        }
    } catch (error) {
        console.error('Erro ao consultar cliente: ', error);
    }    
}

export async function editarCliente(): Promise<void> {
    try {     
        const nome: string = await rl.question('Digite o nome do cliente: ');
        let result: any = await buscaCliente(nome);
        if (result.rowCount === 0) {
            console.log("Cliente não encontrado.");
        } else {
            const clienteId: number = result.rows[0].id;
            const nome: string = await rl.question('Digite o novo nome do cliente: ');
            const cpf: string = await rl.question('Digite o novo CPF do cliente: ');
            const data_nasc: string = await rl.question('Digite a nova data de nascimento do cliente: ');
            const telefone: string = await rl.question('Digite o novo telefone do cliente: ');
            const email: string = await rl.question('Digite o novo e-mail do cliente: ');
            result = await atualizarCliente(clienteId, nome, cpf, data_nasc, telefone, email);
            console.log(`Cliente "${nome}" atualizado com sucesso!`);
        }
    } catch (error) {
        console.error('Erro ao atualizar cliente: ', error);
    }     
}

export async function apagarCliente(): Promise<void> {
    try {
        const nome: string = await rl.question('Digite o nome do cliente: ');
        let result: any = await buscaCliente(nome);
        if (result.rowCount === 0) {
            console.log("Cliente não encontrado.");
        } else {
            const clienteId: number = result.rows[0].id;
            result = await removerCliente(clienteId);
            console.log("Cliente removido com sucesso!");  
        }                  
    } catch (error) {
        console.error('Erro ao remover cliente: ', error);            
    }   
}