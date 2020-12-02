function main()
{
 var num = parseInt(document.getElementById("num").value);
 var resp = document.getElementById("resposta");

 resp.innerHTML = fatorial(num);
}
function fatorial(x)
{
 if(x<=1)
  return 1;
 else
  return x * fatorial(x-1);
}