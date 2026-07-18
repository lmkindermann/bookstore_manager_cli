import { criarBanco, criarTabelas } from '../services/DatabaseService';
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
                    await this.criarBancoDados();
                    break;
                
                case '2':
                    await this.criarTabelas();
                    break;

                case '3':
                    running = false;
                    break;

                default:
                    console.log('Opção inválida');
                    await this.pause();
            }
        }
        this.callback();
    }

    private async criarBancoDados(): Promise<void> {
        console.clear();
        console.log("Criar Banco de Dados");
        try {
            await criarBanco();                  
        } catch (error) {
            console.error('Erro ao criar banco de dados: ', error);            
        }
        await this.pause();
    }

    private async criarTabelas(): Promise<void> {
        console.clear();
        console.log("Criar Tabelas");        
        try {
            await criarTabelas();
        } catch (error) {
            console.error('Erro ao criar tabelas: ', error);            
        }
        await this.pause();
    }

}
