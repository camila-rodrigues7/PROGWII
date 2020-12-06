const animais_tag = document.querySelector('div.animais')
const resultado_tag = document.querySelector('div.resultados')

var animais = [
    { nome: "Butters", idade: 3, tipo: "cachorro" },
    { nome: "Lizzy", idade: 6, tipo: "cachorro" },
    { nome: "Red", idade: 1,tipo: "gato" },
    { nome: "Joey", idade: 3, tipo: "gato" }
]

addEventListener('load', function() {
    console.log(animais);
    animais_tag.innerHTML += '<h3>Meus Animais</h3>'
    animais.forEach(animal => {
        animais_tag.innerHTML += `<p>${animal.nome} - ${animal.idade} - ${animal.tipo}<p>`
    });
    animais_tag.innerHTML += "<hr />"
    
var animal2 = animais.push('Bimbo');

function filterItems(query) {
  return animais.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(filterItems('cachorro')); 

const newArray = anima2.filter(animais => animais.age > idade: *=7);
console.table (newarray);

AgeSum = animais.reduce((total, elemento) => {
if (elemento.tipo === '') return total += (elemento.idade +=7);
else return total}, 0);

    
})