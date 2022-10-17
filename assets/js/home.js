const sair = () => {
  localStorage.removeItem('token');
  window.location.href = 'index.html'
}

const anchor = (event) => {
  event.preventDefault();
  window.open("https://www.uol.com.br", "_blank")
}

let spanInfoSeconds = document.querySelector('[data-home="countdown"]');
let infoSeconds = parseInt(spanInfoSeconds.textContent);

let countdown = () => {
  if(infoSeconds !== 0){
    setTimeout(countdown, 1000)
    spanInfoSeconds.textContent = infoSeconds;
    infoSeconds--;
  }else{
    if(confirm('Deseja continuar logado') === true){
      window.location.reload();
    }else{
      sair();
    }
  }
}

countdown();