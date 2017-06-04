var a = 12
var b = 25
var dzialanie = (a * a) + (2 * a * b) - (b * b)
console.log('Kiedy pomnożymy ' + a + ' przez ' + a +', dodając do tego ' + a + ' x ' + b + ' x 2 oraz odejmując ' + b + ' podniesione do kwadratu otrzymamy ' + dzialanie);


if (dzialanie > 0) {
    console.log('Wynik jest dodatni');
} else if (dzialanie < 0) {
    console.log('Wynik jest ujemny');
} else {
    console.log('Wynik jest równy zeru');
}