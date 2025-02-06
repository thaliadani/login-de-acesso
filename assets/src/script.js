function validarLogin() {
  let usuario = document.getElementById('usuario').value;
  let senha = document.getElementById('senha').value;

  // '/' Indica o inicio e o fim da operação
  // '^' Indica o inicio da string
  // '$' Indica o fim da string
  // 'test' retorna verdadeiro ou falso
  let validarUsuario = /^[13579]{5}$/.test(usuario);
  let validarSenha = /^[02468]{4}$/.test(senha);

  if (validarUsuario && validarSenha) {
    alert('Usuário e senha válidos.');
  } else {
    //'\n' Pula uma linha do texto no javascript
    alert('Usuário ou senha inválidos!\n\n Lembre-se:\n- O usuário precisa conter apenas 5 dígitos com apenas números ímpares.\n- A senha precisa ser de apenas 4 dígitos com números pares.');
  }
}

// Digitar no input apenas numeros
function apenasNumeros(event) {
  const input = event.target;
  input.value = input.value.replace(/[^0-9]/g, '');
}

