import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { menuPrincipal } from '../menus/menuOptions';
import { AutorController } from './AutorController';
import { LivroController } from './LivroController';
import { ClienteController } from './ClienteController';
import { EmprestimoController } from './EmprestimoController';
import { DatabaseController } from './DatabaseController';


export class MainController {
    private readonly rl = readline.createInterface({
        input,
        output
    });

    public async start(): Promise<void> {
        const menuAutor = new AutorController(this.rl, this.pause, this.start.bind(this)); 
        const menuLivro = new LivroController(this.rl, this.pause, this.start.bind(this));
        const menuCliente = new ClienteController(this.rl, this.pause, this.start.bind(this));
        const menuEmprestimo = new EmprestimoController(this.rl, this.pause, this.start.bind(this));
        const menuBancoDados = new DatabaseController(this.rl, this.pause, this.start.bind(this));
        // callback -> Passa a função start como callback para retornar ao menu principal
        let running: boolean = true;          
        
        while(running) {            
            menuPrincipal();                  
            const option: string = await this.rl.question(
                'Escolha uma opção: '
            );
            
            switch (option) {
                case '1':
                    //função menu autores
                    //console.log("Opção 1 digitada")  //await this...
                    await menuAutor.start(); 
                    //await this.pause();
                    break;

                case '2':
                    //função menu livros
                    //console.log("Opção 2 digitada")
                    await menuLivro.start();
                    //await this.pause();
                    break;
                
                case '3':
                    //função menu clientes
                    //console.log("Opção 3 digitada")
                    await menuCliente.start();
                    //await this.pause();
                    break;

                case '4':
                    //função menu empréstimos
                    //console.log("Opção 4 digitada")
                    await menuEmprestimo.start();
                    //await this.pause();
                    break;

                case '5':
                    //função banco de dados
                    //console.log("Opção 5 digitada")
                    await menuBancoDados.start();
                    //await this.pause();
                    break;
                
                case '6':
                    //função menu encerrar
                    //console.log("Opção 6 digitada")                    
                    //pendente: encerrar a conexão com o pool
                    running = false;
                    break;

                default:
                    console.log('Opção inválida');
                    await this.pause();
            }
        }
        this.rl.close();
    }

    public async pause(): Promise<void> {
        await this.rl.question('\nPressione ENTER para continuar...');
    }
}
