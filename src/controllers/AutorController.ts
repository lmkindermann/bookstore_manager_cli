import { rl, rlPause } from '../utils/readlineConfig';
import { menuAutor } from '../menus/menuOptions';
import { novoAutor, mostrarAutores } from '../services/AutorService';

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
        // Lógica para consultar um autor (nome ou id)
        // Retorna as informações do autor ou avisa se não encontrado
        // tratar erros e exibir mensagens de sucesso ou falha
        try {
            // Lógica para consultar o autor
            console.log("Informações do autor exibidas com sucesso!");                    
        } catch (error) {
            console.error('Erro ao consultar autor: ', error);            
        }    
        //await this.pause();
        await rlPause();
    }

    private async atualizarAutor(): Promise<void> {
        console.clear();
        console.log("Atualizar Autor");
        // Lógica para atualizar um autor (nome ou id)
        // Retorna as informações do autor atualizado ou avisa se não encontrado
        // tratar erros e exibir mensagens de sucesso ou falha
        try {
            // Lógica para atualizar o autor
            console.log("Informações do autor atualizadas com sucesso!");                    
        } catch (error) {
            console.error('Erro ao atualizar autor: ', error);            
        }    
        //await this.pause();
        await rlPause();
    }

    private async removerAutor(): Promise<void> {
        console.clear();
        console.log("Remover Autor");
        // Lógica para remover um autor (nome ou id)
        // Retorna uma mensagem de sucesso ou avisa se não encontrado
        // tratar erros e exibir mensagens de sucesso ou falha
        try {
            // Lógica para remover o autor
            console.log("Autor removido com sucesso!");                    
        } catch (error) {
            console.error('Erro ao remover autor: ', error);            
        }    
        //await this.pause();
        await rlPause();
    }

}
