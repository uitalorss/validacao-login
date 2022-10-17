const entrar = (event) => {
  event.preventDefault();
  let inputUser = document.querySelector('[data-form="user"]');
  let inputPassword = document.querySelector('[data-form="password"]');
  let messageWarning = document.querySelector('[data-form="message-warning"]');
  userValid = {
    user: 'admin',
    password: 'admin'
  }

  if(inputUser.value === '' || inputPassword.value === ''){
    messageWarning.textContent = `Preencha todos os campos`;
    inputUser.style.borderColor = "#E9B425";
    inputPassword.style.borderColor = "#E9B425";
  }else{
    if(inputUser.value === userValid.user && inputPassword.value === userValid.password){
    window.location.href = 'home.html';
    let token = Math.random().toString(16).substring(2);
    localStorage.setItem('token', token);
  }else{
    clearFields();
    inputUser.style.borderColor = "#E9B425";
    inputPassword.style.borderColor = "#E9B425";
    messageWarning.textContent = `Ops, usuário ou senha inválidos. Tente novamente!`;
  }
}

function clearFields(){
  inputUser.value = '';
  inputPassword.value = '';
}
}