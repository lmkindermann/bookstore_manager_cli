import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export class MainController {
    private readonly rl = readline.createInterface({
        input,
        output
    });
    
    constructor(){}

    public async start(): Promise<void> {
        let running: boolean = true;        
        while(running) {            
            console.clear();
            console.log("Bem-vindo(a) ao Bookstore Manager");
            console.log("Selecione a opção desejada:");
            console.log("1. Autores");
            console.log("2. Livros");
            console.log("3. Clientes");
            console.log("4. Empréstimos");
            console.log("5. Encerrar")
            console.log("Digite o número desejado.");
        
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
