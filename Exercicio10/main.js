const tag = document.querySelector('input[name="temperatura"]')
const resultados = document.querySelector('div.resultados')

tag.addEventListener('blur', function(evento) {
    
})
function main()
{
 var num = parseInt(document.getElementById("num").value);
 var resp = document.getElementById("resposta");
 
 if(document.getElementById("CtoF").checked==true)
  resp.innerHTML = ctof(num);
 if(document.getElementById("FtoC").checked==true)
  resp.innerHTML = ftoc(num);
}
function ctof(x)
{
 return (1.8*x + 32);
}

function ftoc(x)
{

 return ( (x-32)*5/9 );
}