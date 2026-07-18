import { menuLivro } from '../menus/menuOptions';

export class LivroController {
    public readonly rl: any;
    private readonly pause: any;
    private readonly callback: any;

    constructor(rl: any, pause: any, callback: any) {
        this.rl = rl;
        this.pause = pause;
        this.callback = callback;
    }

    public async start(): Promise<void> {
        let running: boolean = true;
        while(running) {
            menuLivro();
            const option: string = await this.rl.question(
                'Escolha uma opção: '
            );

            switch (option) {
                case '1':
                    //função cadastrar livro
                    //console.log("Opção 1 digitada")  //await this...
                    //await this.pause();
                    await this.cadastrarLivro();
                    break;
                
                case '2':
                    //função listar livros
                    //console.log("Opção 2 digitada")
                    //await this.pause();
                    await this.listarLivros();
                    break;

                case '3':
                    //função consultar livro
                    //console.log("Opção 3 digitada")
                    //await this.pause();
                    await this.consultarLivro();
                    break;

                case '4':
                    //função atualizar livro
                    //console.log("Opção 4 digitada")
                    //await this.pause();
                    await this.atualizarLivro();
                    break;

                case '5':
                    //função remover livro
                    //console.log("Opção 5 digitada")
                    //await this.pause();
                    await this.removerLivro();
                    break;

                case '6':
                    //função retornar ao menu anterior
                    //console.log("Opção 6 digitada")
                    running = false;
                    break;

                default:
                    console.log('Opção inválida');
                    await this.pause();
            }
        }
        this.callback();  // Chama a função de callback para retornar ao menu principal
    }

    private async cadastrarLivro(): Promise<void> {
        console.clear();
        console.log("Cadastrar Livro");
        try {
            //verificar se o livro já existe no banco de dados (services)
            //se não existir, cadastrar o livro no banco de dados (repositores)
            //tratar erros e exibir mensagens de sucesso ou falha
            const nome: string = await this.rl.question('Digite o nome do livro: ');                        
            console.log(`Livro "${nome}" cadastrado com sucesso!`);                    
        } catch (error) {
            console.error('Erro ao cadastrar livro: ', error);            
        }
        await this.pause();
    }

    private async listarLivros(): Promise<void> {
        console.clear();
        console.log("Listar Livros");
        // Lógica para listar os livros
        // avisa se a tabela estiver vazia
        // tratar erros e exibir mensagens de sucesso ou falha
        try {
            // Lógica para listar os livros
            console.log("Lista de livros exibida com sucesso!");                    
        } catch (error) {
            console.error('Erro ao listar livros: ', error);            
        }
        await this.pause();
    }

    private async consultarLivro(): Promise<void> {
        console.clear();
        console.log("Consultar Livro");
        // Lógica para consultar um livro (nome ou id)
        // Retorna as informações do livro ou avisa se não encontrado
        // tratar erros e exibir mensagens de sucesso ou falha
        try {
            // Lógica para consultar o livro
            console.log("Informações do livro exibidas com sucesso!");                    
        } catch (error) {
            console.error('Erro ao consultar livro: ', error);            
        }    
        await this.pause();
    }

    private async atualizarLivro(): Promise<void> {
        console.clear();
        console.log("Atualizar Livro");
        // Lógica para atualizar um livro (nome ou id)
        // Retorna as informações do livro atualizado ou avisa se não encontrado
        // tratar erros e exibir mensagens de sucesso ou falha
        try {
            // Lógica para atualizar o livro
            console.log("Informações do livro atualizadas com sucesso!");                    
        } catch (error) {
            console.error('Erro ao atualizar livro: ', error);            
        }    
        await this.pause();
    }

    private async removerLivro(): Promise<void> {
        console.clear();
        console.log("Remover Livro");
        // Lógica para remover um livro (nome ou id)
        // Retorna uma mensagem de sucesso ou avisa se não encontrado
        // tratar erros e exibir mensagens de sucesso ou falha
        try {
            // Lógica para remover o livro
            console.log("Livro removido com sucesso!");                    
        } catch (error) {
            console.error('Erro ao remover livro: ', error);            
        }    
        await this.pause();
    }

}
