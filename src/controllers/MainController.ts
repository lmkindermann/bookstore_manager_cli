import { rl, rlPause } from '../utils/readlineConfig';
import { menuPrincipal } from '../menus/menuOptions';
import { AutorController } from './AutorController';
import { LivroController } from './LivroController';
import { ClienteController } from './ClienteController';
import { EmprestimoController } from './EmprestimoController';
import { DatabaseController } from './DatabaseController';


export class MainController {    
    public async start(): Promise<void> {
        const menuAutor = new AutorController(this.start.bind(this)); 
        const menuLivro = new LivroController(this.start.bind(this));
        const menuCliente = new ClienteController(this.start.bind(this));
        const menuEmprestimo = new EmprestimoController(this.start.bind(this));
        const menuBancoDados = new DatabaseController(this.start.bind(this));
        // callback -> Passa a função start como callback para retornar ao menu principal
        let running: boolean = true;          
        
        while(running) {            
            menuPrincipal();                  
            const option: string = await rl.question(
                'Escolha uma opção: '
            );
            
            switch (option) {
                case '1':
                    await menuAutor.start(); 
                    break;

                case '2':
                    await menuLivro.start();
                    break;
                
                case '3':
                    await menuCliente.start();
                    break;

                case '4':
                    await menuEmprestimo.start();
                    break;

                case '5':
                    await menuBancoDados.start();
                    break;
                
                case '6':
                    running = false;
                    break;

                default:
                    console.log('Opção inválida');
                    await rlPause();
            }
        }
        rl.close();
    }
}
