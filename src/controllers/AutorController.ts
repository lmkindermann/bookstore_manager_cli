import { rl, rlPause } from '../utils/readlineConfig';
import { menuAutor } from '../menus/menuOptions';
import { novoAutor, mostrarAutores, consultaAutor, editarAutor, apagarAutor } from '../services/AutorService';

export class AutorController {
    private readonly callback: any;

    constructor(callback: any) {
        this.callback = callback;
    }

    public async start(): Promise<void> {
        let running: boolean = true;
        while(running) {
            menuAutor();
            const option: string = await rl.question(
                'Escolha uma opção: '
            );

            switch (option) {
                case '1':
                    await this.cadastrarAutor();
                    break;
                
                case '2':
                    await this.listarAutores();
                    break;

                case '3':
                    await this.consultarAutor();
                    break;

                case '4':
                    await this.atualizarAutor();
                    break;

                case '5':
                    await this.removerAutor();
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

    private async cadastrarAutor(): Promise<void> {
        console.clear();
        console.log("Cadastrar Autor");
        await novoAutor();
        await rlPause();
    }

    private async listarAutores(): Promise<void> {
        console.clear();
        console.log("Listar Autores");
        await mostrarAutores();
        await rlPause();
    }

    private async consultarAutor(): Promise<void> {
        console.clear();
        console.log("Consultar Autor");
        await consultaAutor();
        await rlPause();
    }

    private async atualizarAutor(): Promise<void> {
        console.clear();
        console.log("Atualizar Autor");
        await editarAutor();
        await rlPause();
    }    

    private async removerAutor(): Promise<void> {
        console.clear();
        console.log("Remover Autor");
        await apagarAutor();        
        await rlPause();
    }
}