const textoTarefa = document.getElementById('texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
// teste
criarTarefa.onclick = function click() {
  const lista = document.createElement('li');
  lista.className = 'lista';
  lista.id = 'lista';
  lista.tabIndex = '0';
  lista.innerHTML = textoTarefa.value;
  listaTarefas.appendChild(lista);
  document.body.appendChild(listaTarefas);
  textoTarefa.value = '';
};
const completedLine = document.querySelector('ol');
const completedLiner = document.querySelector('ol');
function insertPhraseInDOM() { // inserir a frase no DOM
  const phrasesList = JSON.parse(localStorage.getItem('listaSalva'));
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  listaTarefas.appendChild(phrase);
}
function salvarTarefas() {
    const oldList = JSON.parse(localStorage.getItem('listaSalva'));
    const phraseText = textoTarefa.value;
    oldList.push(phraseText);
    localStorage.setItem('listaSalva', JSON.stringify(oldList));
    // insertPhraseInDOM();
  
}

// https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo
function doisClick(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
  salvarTarefas();
}

completedLine.addEventListener('dblclick', doisClick);
// inpirei no projeto anterior, mesmo codigo
function limpa() {
// teste
  const lista = document.querySelectorAll('.lista');
  for (let i = 0; i < lista.length; i += 1) {
    lista[i].remove();
  }
  // salvarTarefas();
}
//
// inpirei no projeto anterior, mesmo codigo
function removerFinalizados() {
// teste
  const completed = document.querySelectorAll('.completed');
  for (let i = 0; i < completed.length; i += 1) {
    completed[i].remove();
  }
  // salvarTarefas();
}
// the link was changed https://stackoverflow.com/questions/70456341/click-event-only-works-on-the-second-click (new link)
// https://stackoverflow.com/questions/70456341/how-can-i-make-my-function-that-change-the-classname-when-i-click-works
function umClick(event) {
  // if (event.target.tagName === 'LI') {
  const listas = document.querySelectorAll('.lista');
  listas.forEach((i) => {
    i.addEventListener('click', function semNomeDois() {
      listas.forEach((j) => {
        if (j !== event.target) {
          j.classList.remove('selected');
        }
      });
      this.classList.add('selected');
    });
  });
  // }
  // salvarTarefas();
}
completedLine.addEventListener('mousedown', umClick);
function removeSelected() {
  // teste
  const listaSelected = document.querySelectorAll('.selected');
  for (let i = 0; i < listaSelected.length; i += 1) {
    listaSelected[i].remove();
  }
  // salvarTarefas();
}
function initialRenderization() {
  if (localStorage.getItem('listaSalva') === null) {
    localStorage.setItem('listaSalva', JSON.stringify([]));
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('listaSalva'));
    const listLength = phrasesList.length - 1;
    for (let index = 0; index <= listLength; index += 1) {
      const listElement = document.createElement('li');
      listElement.innerText = phrasesList[index];
      listaTarefas.appendChild(listElement);
    }
  }
}
// limpar lint
window.onload = function unNameFunc() {
  limpa();
  removeSelected();
  removerFinalizados();
  initialRenderization();
};
