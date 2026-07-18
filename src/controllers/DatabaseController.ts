import { menuBancoDados } from '../menus/menuOptions';

export class DatabaseController {
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
            menuBancoDados();
            const option: string = await this.rl.question(
                'Escolha uma opção: '
            );

            switch (option) {
                case '1':
                    //função criar banco de dados
                    //console.log("Opção 1 digitada")  //await this...
                    //await this.pause();
                    await this.criarBancoDados();
                    break;
                
                case '2':
                    //função criar tabelas
                    //console.log("Opção 2 digitada")
                    //await this.pause();
                    await this.criarTabelas();
                    break;

                case '3':
                    //função retornar ao menu anterior
                    //console.log("Opção 3 digitada")
                    running = false;
                    break;

                default:
                    console.log('Opção inválida');
                    await this.pause();
            }
        }
        this.callback();  // Chama a função de callback para retornar ao menu principal
    }

    private async criarBancoDados(): Promise<void> {
        console.clear();
        console.log("Criar Banco de Dados");
        try {
            //verificar se o banco de dados já existe (services)
            //se não existir, criar o banco de dados (repositores)
            //tratar erros e exibir mensagens de sucesso ou falha
            console.log(`Banco de dados criado com sucesso!`);                    
        } catch (error) {
            console.error('Erro ao criar banco de dados: ', error);            
        }
        await this.pause();
    }

    private async criarTabelas(): Promise<void> {
        console.clear();
        console.log("Criar Tabelas");
        // Verifica se as tabelas já existem no banco de dados (services)
        // Se não existirem, cria as tabelas no banco de dados (repositores)
        // tratar erros e exibir mensagens de sucesso ou falha
        try {
            // Lógica para criar tabelas
            console.log("Tabelas criadas com sucesso!");                    
        } catch (error) {
            console.error('Erro ao criar tabelas: ', error);            
        }
        await this.pause();
    }

}
