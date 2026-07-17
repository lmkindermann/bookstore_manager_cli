import { menuCliente } from '../menus/menuOptions';

export class ClienteController {
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
            menuCliente();
            const option: string = await this.rl.question(
                'Escolha uma opção: '
            );

            switch (option) {
                case '1':
                    //função cadastrar cliente
                    console.log("Opção 1 digitada")  //await this...
                    await this.pause();
                    break;
                
                case '2':
                    //função listar clientes
                    console.log("Opção 2 digitada")
                    await this.pause();
                    break;

                case '3':
                    //função consultar cliente
                    console.log("Opção 3 digitada")
                    await this.pause();
                    break;

                case '4':
                    //função atualizar cliente
                    console.log("Opção 4 digitada")
                    await this.pause();
                    break;

                case '5':
                    //função remover cliente
                    console.log("Opção 5 digitada")
                    await this.pause();
                    break;

                case '6':
                    //função retornar ao menu anterior
                    console.log("Opção 6 digitada")
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
