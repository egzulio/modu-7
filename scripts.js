function Telefon(marka, cena, kolor) {
  this.marka = marka;
  this.cena = cena;
  this.kolor = kolor;
};




Telefon.prototype.printInfo = function () {
  console.log('Marka smartfona to ' + this.marka + ', cena wynosi ' + this.cena + ' zł, kolor ' + this.kolor + '.');
};





var iphone6s = new Telefon('Apple', 2250, 'silver'),
S6 = new Telefon('Samsung', 2200, 'white'),
OnePlus = new Telefon('One Plus One', 2120, 'black');







iphone6s.printInfo();
S6.printInfo();
OnePlus.printInfo();