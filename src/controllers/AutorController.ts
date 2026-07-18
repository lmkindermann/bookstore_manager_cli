import { menuAutor } from '../menus/menuOptions';

export class AutorController {
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
            menuAutor();
            const option: string = await this.rl.question(
                'Escolha uma opção: '
            );

            switch (option) {
                case '1':
                    //função cadastrar autor
                    //console.log("Opção 1 digitada")  //await this...
                    //await this.pause();
                    await this.cadastrarAutor();
                    break;
                
                case '2':
                    //função listar autores
                    //console.log("Opção 2 digitada")
                    //await this.pause();
                    await this.listarAutores();
                    break;

                case '3':
                    //função consultar autor
                    //console.log("Opção 3 digitada")
                    //await this.pause();
                    await this.consultarAutor();
                    break;

                case '4':
                    //função atualizar autor
                    //console.log("Opção 4 digitada")
                    //await this.pause();
                    await this.atualizarAutor();
                    break;

                case '5':
                    //função remover autor
                    //console.log("Opção 5 digitada")
                    //await this.pause();
                    await this.removerAutor();
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

    private async cadastrarAutor(): Promise<void> {
        console.clear();
        console.log("Cadastrar Autor");
        try {
            //verificar se o autor já existe no banco de dados (services)
            //se não existir, cadastrar o autor no banco de dados (repositores)
            //tratar erros e exibir mensagens de sucesso ou falha
            const nome: string = await this.rl.question('Digite o nome do autor: ');            
            const nacionalidade: string = await this.rl.question('Digite a nacionalidade do autor: ');            
            console.log(`Autor "${nome}" cadastrado com sucesso!`);                    
        } catch (error) {
            console.error('Erro ao cadastrar autor: ', error);            
        }
        await this.pause();
    }

    private async listarAutores(): Promise<void> {
        console.clear();
        console.log("Listar Autores");
        // Lógica para listar os autores
        // avisa se a tabela estiver vazia
        // tratar erros e exibir mensagens de sucesso ou falha
        try {
            // Lógica para listar os autores
            console.log("Lista de autores exibida com sucesso!");                    
        } catch (error) {
            console.error('Erro ao listar autores: ', error);            
        }
        await this.pause();
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
        await this.pause();
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
        await this.pause();
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
        await this.pause();
    }

}
