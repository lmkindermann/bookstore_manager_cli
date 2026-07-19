import { rl, rlPause } from '../utils/readlineConfig';
import { criarBanco, criarTabelas } from '../services/DatabaseService';
import { menuBancoDados } from '../menus/menuOptions';

export class DatabaseController {
    private readonly callback: any;

    constructor(callback: any) {
        this.callback = callback;
    }

    public async start(): Promise<void> {
        let running: boolean = true;
        while(running) {
            menuBancoDados();
            const option: string = await rl.question(
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
                    await rlPause();
            }
        }
        this.callback();
    }

    private async criarBancoDados(): Promise<void> {
        console.clear();
        console.log("Criar Banco de Dados");
        await criarBanco();
        await rlPause();
    }

    private async criarTabelas(): Promise<void> {
        console.clear();
        console.log("Criar Tabelas");
        await criarTabelas();        
        await rlPause();
    }

}
