import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export const rl = readline.createInterface({
    input,
    output
});

export async function rlPause(): Promise<void> {
    await rl.question('\nPressione ENTER para continuar...');
}