import { MainController } from './controllers/MainController';
import { connectToDatabase } from './database/dbConnection';

async function main(): Promise<void> {
    const menuMain = new MainController();
    const connStatus: string = await connectToDatabase();  
    if (connStatus !== '0') {await menuMain.pause();}  
    //const menuMain = new MainController(connStatus);    
    await menuMain.start();
}

main();