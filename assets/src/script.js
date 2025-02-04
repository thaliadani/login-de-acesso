function enviarFormulario() {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = "";

  const nome = document.getElementById("nome").value;
  const senha = document.getElementById("senha").value;

  if ((nome, senha)) {
    sessionStorage.setItem("nome", nome);
    sessionStorage.setItem("senha", senha);
    window.location.href = "./dados-do-cadastro.html";
  } else {
    alert("Digitou o nome ou a senha errado");
  }
}

const nome = sessionStorage.getItem("nome");
const senha = sessionStorage.getItem("senha");

if (nome && senha) {
  document.getElementById("dados").innerHTML = `
    <p>> <strong>Nome:</strong> ${nome}</p>
    <p>> <strong>Senha:</strong> ${senha}</p>
    `;
}else{
    document.getElementById('dados').innerHTML = `
    <p>Dados não encontrados</p>`
}
