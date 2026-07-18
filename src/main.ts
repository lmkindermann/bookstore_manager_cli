import { MainController } from './controllers/MainController';
import { conectarBanco } from './database/databaseConnection';

async function main(): Promise<void> {
    const menuMain = new MainController();
    const connStatus: string = await conectarBanco();  
    if (connStatus !== '0') {await menuMain.pause();}  
    //const menuMain = new MainController(connStatus);    
    await menuMain.start();
}

main();