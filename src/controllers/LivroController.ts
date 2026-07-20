import { rl, rlPause } from '../utils/readlineConfig';
import { menuLivro } from '../menus/menuOptions';
import { novoLivro, mostrarLivros, consultaLivro, editarLivro, apagarLivro } from '../services/LivroService';

export class LivroController {
    private readonly callback: any;

    constructor(callback: any) {
        this.callback = callback;
    }

    public async start(): Promise<void> {
        let running: boolean = true;
        while(running) {
            menuLivro();
            const option: string = await rl.question(
                'Escolha uma opção: '
            );

            switch (option) {
                case '1':
                    await this.cadastrarLivro();
                    break;
                
                case '2':
                    await this.listarLivros();
                    break;

                case '3':
                    await this.consultarLivro();
                    break;

                case '4':
                    await this.atualizarLivro();
                    break;

                case '5':
                    await this.removerLivro();
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

    private async cadastrarLivro(): Promise<void> {
        console.clear();
        console.log("Cadastrar Livro");
        await novoLivro();
        await rlPause();        
    }

    private async listarLivros(): Promise<void> {
        console.clear();
        console.log("Listar Livros");
        await mostrarLivros();
        await rlPause();
    }

    private async consultarLivro(): Promise<void> {
        console.clear();
        console.log("Consultar Livro");
        await consultaLivro();
        await rlPause();
    }

    private async atualizarLivro(): Promise<void> {
        console.clear();
        console.log("Atualizar Livro");
        await editarLivro();
        await rlPause();
    }

    private async removerLivro(): Promise<void> {
        console.clear();
        console.log("Remover Livro");
        await apagarLivro();
        await rlPause();
    }

}