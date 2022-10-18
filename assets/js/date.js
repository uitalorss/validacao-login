(() => {
  const infoRealTime = document.querySelector('[data-home="info-time"]')
  const infoHour = document.createElement('h1');
  const infoDate = document.createElement('p');

  const showRealTime = setInterval(() => {
    let date = new Date();
    infoHour.classList.add('header-info__hour');
    infoDate.classList.add('header-info__date');
    infoHour.innerHTML = new Intl.DateTimeFormat('pt-br', {timeStyle: 'short'}).format(date);
    infoDate.innerHTML = new Intl.DateTimeFormat('pt-BR', {dateStyle: 'full'}).format(date);
    infoRealTime.appendChild(infoHour);
    infoRealTime.appendChild(infoDate);
  }, 1000)
  showRealTime;
})()