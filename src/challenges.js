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
function highestCount(array) {
  let test = array[0];
  let n = 0;

  for (let index = 0; index < array.length; index+= 1) {
    if (array[index] > test) {
      test = array[index]
    }
  }
  for (let index = 0; index < array.length; index+= 1) {
    if (test === array[index]) {
      n +=1;
    }
  }
  return n;
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
function encode(string) {
  let cripto=[];
  for (let index = 0; index < string.length; index++) {
    if (string[index]==="a") {
      cripto.push("1")
    }
    else if (string[index]==="e"){
      cripto.push("2")
    }
    else if (string[index]==="i"){
      cripto.push("3")
    }
    else if (string[index]==="o"){
      cripto.push("4")
    }
    else if (string[index]==="u"){
      cripto.push("5")
    }
    else{
      cripto.push(string[index])
    }
  }
  return cripto.toString();
}
function decode(encode) {
  let cripto;
  for (let index = 0; index < encode.length; index++) {
    if (string[index]==="1") {
      cripto.push("a")
    }
    else if (string[index]==="2"){
      cripto.push("e")
    }
    else if (string[index]==="3"){
      cripto.push("i")
    }
    else if (string[index]==="4"){
      cripto.push("o")
    }
    else if (string[index]==="5"){
      cripto.push("u")
    }
    else{
      cripto.push(string[index])
    }
  }
  return cripto;
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
