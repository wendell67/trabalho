
const prompt = require('prompt-sync')(); 
const senhaCorreta = '2024';
var senha;

while (true) {
  senha = prompt('Digite a senha: '); 

  if (senha === senhaCorreta) {
    console.log('Acesso permitido'); 
    break; 
  } else {
    console.log('Acesso negado'); 
  }
}

