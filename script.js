const textoTarefa = document.getElementById('texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
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
// referência de maneiras de usar o forEach:
// em = https://stackoverflow.com/questions/65530318/add-remove-class-when-clicking-on-element-with-pure-javascript
// let numero = 0;
// document.querySelector('li').addEventListener('click', function unnamed() {
//   numero += 1;
//   return numero;
// });
