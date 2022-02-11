// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
  }

// Desafio 4
function concatName(string) {
  let nome;
  nome = string[string.length - 1] + ", " + string[0];
  return nome;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(array) 
{
//   let acertos=0;
//   for (let index = 0; index < array.length; index++) {
//       for (let index1 = 0; index1 < array.length; index1++) {
//           if (array[index] === array[index1]) {
//               acertos += 1;
//           }
//       }
//   }
//   return acertos - (array.length -1);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1;
    if (mouse < cat1) {
      gato1 = cat1 - mouse;
    }else{
      gato1 = mouse- cat1;
    }
  let gato2
    if (mouse < cat2) {
      gato2 = cat2 - mouse;
    }else{
      gato2 = mouse- cat2;
    }


  if(gato1 === gato2){
    return "os gatos trombam e o rato foge";
  }  
  else if (gato1 < gato2) {
    return "cat1";
  }
  else{
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let resultado=[];
  for (let index = 0; index < array.length; index+= 1) {
    if (((array[index]%3)===0) && ((array[index]%5)===0)){
      resultado.push("fizzBuzz")
  }
  else if (array[index]%3===0 ) {
      resultado.push("fizz");
  }
  else if(array[index]%5===0) {
      resultado.push("buzz");
  }
  else{
      resultado.push("bug!");
  }
}
  return resultado;
}
// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
