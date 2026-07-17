import { MainController } from './controllers/MainController';

async function main(): Promise<void> {
    const menu = new MainController();
    await menu.start();    
}

main();