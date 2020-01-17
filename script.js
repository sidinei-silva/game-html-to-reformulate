setTimeout(function() {
  const nuvemElement = document.createElement('div');
  nuvemElement.setAttribute('class', 'nuvem');
  nuvemElement.style.top = '20%';
  const ceuElement = document.querySelector('#ceu');
  ceuElement.appendChild(nuvemElement)
}, 8000)