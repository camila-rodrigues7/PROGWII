let alunos = ['Roberto', 'Denilson', 'Carlos' ];
alunos.sort();
alunos.sort(function (a, b, c,) {
console.log(alunos);
return a.length - b.lengt - c.length;
});
function reverse(str) {
    let stack = [];
   
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
  
    let reverseStr = '';
    while (stack.length > 0) {
        reverseStr += stack.pop();
    }
    return reverseStr;
}
console.log(reverse('JavaScript Stack'));