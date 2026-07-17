import { MainController } from './menus/menuPrincipal';

async function main(): Promise<void> {
    const menu = new MainController();
    await menu.start();    
}

main();