import { menuAutor } from '../menus/menuOptions';

export class AutorController {
    public readonly rl: any;
    private readonly callback: any;

    constructor(rl: any, callback: any) {
        this.rl = rl;
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
                    console.log("Opção 1 digitada")  //await this...
                    await this.pause();
                    break;
                
                case '2':
                    //função listar autores
                    console.log("Opção 2 digitada")
                    await this.pause();
                    break;

                case '3':
                    //função consultar autor
                    console.log("Opção 3 digitada")
                    await this.pause();
                    break;

                case '4':
                    //função atualizar autor
                    console.log("Opção 4 digitada")
                    await this.pause();
                    break;

                case '5':
                    //função remover autor
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
        //this.rl.close();
        this.callback();  // Chama a função de callback para retornar ao menu principal
    }

    private async pause(): Promise<void> {
        await this.rl.question('\nPressione ENTER para continuar...');
    }
}
