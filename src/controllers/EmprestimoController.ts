import { menuEmprestimo } from '../menus/menuOptions';

export class EmprestimoController {
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
            menuEmprestimo();
            const option: string = await this.rl.question(
                'Escolha uma opção: '
            );

            switch (option) {
                case '1':
                    //função cadastrar empréstimo
                    //console.log("Opção 1 digitada")  //await this...
                    //await this.pause();
                    await this.cadastrarEmprestimo();
                    break;
                
                case '2':
                    //função consultar empréstimos
                    //console.log("Opção 2 digitada")
                    //await this.pause();
                    await this.consultarEmprestimo();
                    break;

                case '3':
                    //função registrar devolução
                    //console.log("Opção 3 digitada")
                    //await this.pause();
                    await this.registrarDevolucao();
                    break;

                case '4':
                    //função retornar ao menu anterior
                    //console.log("Opção 4 digitada")
                    running = false;
                    break;

                default:
                    console.log('Opção inválida');
                    await this.pause();
            }
        }
        this.callback();  // Chama a função de callback para retornar ao menu principal
    }

    
    private async cadastrarEmprestimo(): Promise<void> {
        console.clear();
        console.log("Cadastrar Emprestimo");
        try {
            //verificar se o empréstimo já existe no banco de dados (services)
            //se não existir, cadastrar o empréstimo no banco de dados (repositores)
            //tratar erros e exibir mensagens de sucesso ou falha
            console.log(`Empréstimo cadastrado com sucesso!`);                    
        } catch (error) {
            console.error('Erro ao cadastrar empréstimo: ', error);            
        }
        await this.pause();
    }

    private async consultarEmprestimo(): Promise<void> {
        console.clear();
        console.log("Consultar Emprestimo");
        // Lógica para consultar um empréstimo (nome ou id)
        // Retorna as informações do empréstimo ou avisa se não encontrado
        // tratar erros e exibir mensagens de sucesso ou falha
        try {
            // Lógica para consultar o empréstimo
            console.log("Informações do empréstimo exibidas com sucesso!");                    
        } catch (error) {
            console.error('Erro ao consultar empréstimo: ', error);            
        }    
        await this.pause();
    }

    private async registrarDevolucao(): Promise<void> {
        console.clear();
        console.log("Registrar Devolução");
        // Lógica para registrar a devolução de um empréstimo
        // Retorna uma mensagem de sucesso ou avisa se o empréstimo não for encontrado
        // tratar erros e exibir mensagens de sucesso ou falha
        try {
            // Lógica para registrar a devolução
            console.log("Devolução registrada com sucesso!");                    
        } catch (error) {
            console.error('Erro ao registrar devolução: ', error);            
        }    
        await this.pause();
    }

}
