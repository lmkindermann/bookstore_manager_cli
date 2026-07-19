import { rl, rlPause } from '../utils/readlineConfig';
import { menuCliente } from '../menus/menuOptions';

export class ClienteController {
    //public readonly rl: any;
    //private readonly pause: any;
    private readonly callback: any;

    //constructor(rl: any, pause: any, callback: any) {
        //this.rl = rl;
        //this.pause = pause;
    constructor(callback: any) {
        this.callback = callback;
    }

    public async start(): Promise<void> {
        let running: boolean = true;
        while(running) {
            menuCliente();
            //const option: string = await this.rl.question(
            const option: string = await rl.question(
                'Escolha uma opção: '
            );

            switch (option) {
                case '1':
                    //função cadastrar cliente
                    //console.log("Opção 1 digitada")  //await this...
                    //await this.pause();
                    await this.cadastrarCliente();
                    break;
                
                case '2':
                    //função listar clientes
                    //console.log("Opção 2 digitada")
                    //await this.pause();
                    await this.listarClientes();
                    break;

                case '3':
                    //função consultar cliente
                    //console.log("Opção 3 digitada")
                    //await this.pause();
                    await this.consultarCliente();
                    break;

                case '4':
                    //função atualizar cliente
                    //console.log("Opção 4 digitada")
                    //await this.pause();
                    await this.atualizarCliente();
                    break;

                case '5':
                    //função remover cliente
                    //console.log("Opção 5 digitada")
                    //await this.pause();
                    await this.removerCliente();
                    break;

                case '6':
                    //função retornar ao menu anterior
                    console.log("Opção 6 digitada")
                    running = false;
                    break;

                default:
                    console.log('Opção inválida');
                    //await this.pause();
                    await rlPause();
            }
        }
        this.callback();  // Chama a função de callback para retornar ao menu principal
    }

    private async cadastrarCliente(): Promise<void> {
        console.clear();
        console.log("Cadastrar Cliente");
        try {
            //verificar se o cliente já existe no banco de dados (services)
            //se não existir, cadastrar o cliente no banco de dados (repositores)
            //tratar erros e exibir mensagens de sucesso ou falha
            //const nome: string = await this.rl.question('Digite o nome do cliente: ');                        
            //console.log(`Cliente "${nome}" cadastrado com sucesso!`);                    
        } catch (error) {
            console.error('Erro ao cadastrar cliente: ', error);            
        }
        //await this.pause();
        await rlPause();
    }

    private async listarClientes(): Promise<void> {
        console.clear();
        console.log("Listar Clientes");
        // Lógica para listar os clientes
        // avisa se a tabela estiver vazia
        // tratar erros e exibir mensagens de sucesso ou falha
        try {
            // Lógica para listar os clientes
            console.log("Lista de clientes exibida com sucesso!");                    
        } catch (error) {
            console.error('Erro ao listar clientes: ', error);            
        }
        //await this.pause();
        await rlPause();
    }

    private async consultarCliente(): Promise<void> {
        console.clear();
        console.log("Consultar Cliente");
        // Lógica para consultar um cliente (nome ou id)
        // Retorna as informações do cliente ou avisa se não encontrado
        // tratar erros e exibir mensagens de sucesso ou falha
        try {
            // Lógica para consultar o cliente
            console.log("Informações do cliente exibidas com sucesso!");                    
        } catch (error) {
            console.error('Erro ao consultar cliente: ', error);            
        }    
        //await this.pause();
        await rlPause();
    }

    private async atualizarCliente(): Promise<void> {
        console.clear();
        console.log("Atualizar Cliente");
        // Lógica para atualizar um cliente (nome ou id)
        // Retorna as informações do cliente atualizado ou avisa se não encontrado
        // tratar erros e exibir mensagens de sucesso ou falha
        try {
            // Lógica para atualizar o cliente
            console.log("Informações do cliente atualizadas com sucesso!");                    
        } catch (error) {
            console.error('Erro ao atualizar cliente: ', error);            
        }    
        //await this.pause();
        await rlPause();
    }

    private async removerCliente(): Promise<void> {
        console.clear();
        console.log("Remover Cliente");
        // Lógica para remover um cliente (nome ou id)
        // Retorna uma mensagem de sucesso ou avisa se não encontrado
        // tratar erros e exibir mensagens de sucesso ou falha
        try {
            // Lógica para remover o cliente
            console.log("Cliente removido com sucesso!");                    
        } catch (error) {
            console.error('Erro ao remover cliente: ', error);            
        }    
        //await this.pause();
        await rlPause();
    }

}
