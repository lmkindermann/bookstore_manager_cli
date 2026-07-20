import { rl, rlPause } from '../utils/readlineConfig';
import { menuCliente } from '../menus/menuOptions';
import { novoCliente, mostrarClientes, consultaCliente, editarCliente, apagarCliente } from '../services/ClienteService';

export class ClienteController {
    private readonly callback: any;

    constructor(callback: any) {
        this.callback = callback;
    }

    public async start(): Promise<void> {
        let running: boolean = true;
        while(running) {
            menuCliente();
            const option: string = await rl.question(
                'Escolha uma opção: '
            );

            switch (option) {
                case '1':
                    await this.cadastrarCliente();
                    break;
                
                case '2':
                    await this.listarClientes();
                    break;

                case '3':
                    await this.consultarCliente();
                    break;

                case '4':
                    await this.atualizarCliente();
                    break;

                case '5':
                    await this.removerCliente();
                    break;

                case '6':
                    running = false;
                    break;

                default:
                    console.log('Opção inválida');
                    await rlPause();
            }
        }
        this.callback();  // Chama a função de callback para retornar ao menu principal
    }

    private async cadastrarCliente(): Promise<void> {
        console.clear();
        console.log("Cadastrar Cliente");
        await novoCliente();
        await rlPause();
    }

    private async listarClientes(): Promise<void> {
        console.clear();
        console.log("Listar Clientes");
        await mostrarClientes();
        await rlPause();
    }

    private async consultarCliente(): Promise<void> {
        console.clear();
        console.log("Consultar Cliente");
        await consultaCliente();
        await rlPause();
    }

    private async atualizarCliente(): Promise<void> {
        console.clear();
        console.log("Atualizar Cliente");
        await editarCliente();
        await rlPause();
    }

    private async removerCliente(): Promise<void> {
        console.clear();
        console.log("Remover Cliente");
        await apagarCliente();
        await rlPause();
    }
}