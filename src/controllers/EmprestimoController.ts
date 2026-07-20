import { rl, rlPause } from '../utils/readlineConfig';
import { menuEmprestimo } from '../menus/menuOptions';
import { novoEmprestimo, mostrarEmprestimos, consultaEmprestimo, editarEmprestimo, apagarEmprestimo } from '../services/EmprestimoService';

export class EmprestimoController {
    private readonly callback: any;

    constructor(callback: any) {
        this.callback = callback;
    }

    public async start(): Promise<void> {
        let running: boolean = true;
        while(running) {
            menuEmprestimo();
            const option: string = await rl.question(
                'Escolha uma opção: '
            );

            switch (option) {
                case '1':
                    await this.cadastrarEmprestimo();
                    break;

                case '2':
                    await this.listarEmprestimos();
                    break;
                
                case '3':
                    await this.consultarEmprestimo();
                    break;

                case '4':
                    await this.renovarEmprestimo();
                    break;

                case '5':
                    await this.registrarDevolucao();
                    break;

                case '6':
                    running = false;
                    break;

                default:
                    console.log('Opção inválida');
                    await rlPause();
            }
        }
        this.callback();  // Chama a função de callback para retornar ao menu principal
    }

    private async cadastrarEmprestimo(): Promise<void> {
        console.clear();
        console.log("Cadastrar Empréstimo");
        await novoEmprestimo();
        await rlPause();
    }

    private async listarEmprestimos(): Promise<void> {
        console.clear();
        console.log("Listar Empréstimos");
        await mostrarEmprestimos();
        await rlPause();
    }

    private async consultarEmprestimo(): Promise<void> {
        console.clear();
        console.log("Consultar Empréstimo");
        await consultaEmprestimo();
        await rlPause();
    }

    private async renovarEmprestimo(): Promise<void> {
        console.clear();
        console.log("Renovar Empréstimo")
        await editarEmprestimo();
        await rlPause();
    }

    private async registrarDevolucao(): Promise<void> {
        console.clear();
        console.log("Registrar Devolução");
        await apagarEmprestimo();
        await rlPause();
    }
}
