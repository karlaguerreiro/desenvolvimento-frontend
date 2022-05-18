function validateForm() {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let name = document.forms["myForm"]["name"].value;
  let cpf = document.forms["myForm"]["cpf"].value;
  let cell = document.forms["myForm"]["cell"].value;
  let mail = document.forms["myForm"]["mail"].value;

  if (name == "" || cpf == "" || cell == "" || mail == "") {
    alert("Todos os campos devem ser preenchidos!");
  } else if (isNaN(cpf || cell)) {
    alert("CPF e celular devem ser preenchido apenas com números!");
  } else if (cpf.length != 11) {
    alert("CPF deve ter 11 números!");
  } else if (!mail.match(validRegex)) {
    alert("Email inválido!");
  } else {
    alert("Formulário enviado com sucesso!");
  }
}
