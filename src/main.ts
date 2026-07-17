import { MainController } from './controllers/MainController';

async function main(): Promise<void> {
    const menuMain = new MainController();
    await menuMain.start();    
}

main();