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
                    console.log("Opção 1 digitada")  //await this...
                    await this.pause();
                    break;
                
                case '2':
                    //função listar livros
                    console.log("Opção 2 digitada")
                    await this.pause();
                    break;

                case '3':
                    //função consultar livro
                    console.log("Opção 3 digitada")
                    await this.pause();
                    break;

                case '4':
                    //função atualizar livro
                    console.log("Opção 4 digitada")
                    await this.pause();
                    break;

                case '5':
                    //função remover livro
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
