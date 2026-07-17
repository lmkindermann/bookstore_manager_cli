import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { menuPrincipal } from '../menus/menuPrincipal';

export class MainController {
    private readonly rl = readline.createInterface({
        input,
        output
    });
    
    constructor(){}

    public async start(): Promise<void> {
        let running: boolean = true;        
        while(running) {            
            menuPrincipal();                  
            const option: string = await this.rl.question(
                'Escolha uma opção: '
            );
            
            switch (option) {
                case '1':
                    //função menu autores
                    console.log("Opção 1 digitada")  //await this...
                    await this.pause();
                    break;

                case '2':
                    //função menu livros
                    console.log("Opção 2 digitada")
                    await this.pause();
                    break;
                
                case '3':
                    //função menu clientes
                    console.log("Opção 3 digitada")
                    await this.pause();
                    break;

                case '4':
                    //função menu empréstimos
                    console.log("Opção 4 digitada")
                    await this.pause();
                    break;

                case '5':
                    //função menu encerrar
                    console.log("Opção 5 digitada")
                    running = false;
                    break;

                default:
                    console.log('Opção inválida');
                    await this.pause();
            }
        }
        this.rl.close();
    }

    private async pause(): Promise<void> {
        await this.rl.question('\nPressione ENTER para continuar...');
    }
}
