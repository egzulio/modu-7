var a = 12
var h = 10
var areaOfTriangle = a*h/2
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + areaOfTriangle);

var question = prompt('Ile cm2 wynosi pole trójkąta o boku 12 cm i wysokości 10 cm?');

switch (question.toLowerCase()) {
  case '60':
    alert('Brawo, to jest prawidłowy wynik!');
    break;
  default:
    alert('Niestety nie :(');
}