function DrawTree(ZMIENNA){
  for (var i = 1; i < ZMIENNA; i++) {
    var Star = "*";
    for (var j = 1; j < i; j++) {
      Star += '*';
    } console.log(' '.repeat(ZMIENNA - i) + Star.split('').join(' '))
  }
}

var DrawTree2 = prompt('Choinka bedzie miala wierszów...');

DrawTree(DrawTree2)
