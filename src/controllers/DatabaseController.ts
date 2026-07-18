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
                    console.log("Opção 1 digitada")  //await this...
                    await this.pause();
                    break;
                
                case '2':
                    //função criar tabelas
                    console.log("Opção 2 digitada")
                    await this.pause();
                    break;

                case '3':
                    //função retornar ao menu anterior
                    console.log("Opção 3 digitada")
                    running = false;
                    break;

                default:
                    console.log('Opção inválida');
                    await this.pause();
            }
        }
        this.callback();  // Chama a função de callback para retornar ao menu principal
    }
}
