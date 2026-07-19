import { MainController } from './controllers/MainController';
import { rlPause } from './utils/readlineConfig';
import { conectarBanco } from './database/databaseConnection';

async function main(): Promise<void> {
    const menuMain = new MainController();
    const connStatus: string = await conectarBanco();      
    if (connStatus !== '0') {await rlPause();}      
    await menuMain.start();
}

main();