import { select } from '@inquirer/prompts';

async function main() {
  const resposta = await select({
    message: 'Selecione uma opção:',
    choices: [
      {
        name: 'Visualizar perfil',
        value: 'view',
        description: 'Veja as informações do seu perfil.',
      },
      {
        name: 'Configurações',
        value: 'config',
        description: 'Altere as preferências do sistema.',
      },
      {
        name: 'Sair',
        value: 'exit',
        description: 'Encerrar o programa.',
      },
    ],
  });

  // Ação baseada na escolha do usuário
  if (resposta === 'view') {
    console.log('Você escolheu: Visualizar perfil!');
  } else if (resposta === 'config') {
    console.log('Você escolheu: Configurações!');
  } else {
    console.log('Saindo... Até logo!');
  }
}

main();
