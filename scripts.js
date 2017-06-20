var list = document.getElementById('list');
var add = document.getElementById('addElem');
var listli = document.getElementsByTagName('li');

add.addEventListener('click', function() {
  list.innerHTML += '<li>item ' + listli.length + '</li>'
})
list.appendChild(addEventListener);