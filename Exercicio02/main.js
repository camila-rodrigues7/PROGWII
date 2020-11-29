const tabuada = (...args)=>{
    console.log(`Tabuada 2 x: ${args}`)  
    for (let valor of args) {
        console.log(`${valor} * 2 = ${valor*2} `)
    } 
}
tabuada(1,2,3,4,5,6,7,8,9,10)    
	
	// usando while
	
	function pulaLinha() {
        document.write("<br><br>");        
    }

    function mostra(frase) {
        document.write(frase);
        pulaLinha();
    }

    var contador = 1;
    var numeroTabuada = parseInt(prompt("Digite o Número que deseja ver resultado"));

    // valida se o numero informado e valido
    while(isNaN(numeroTabuada)) {
        numeroTabuada = parseInt(prompt("Número inválido."));
    }

    mostra("<big>Tabuada do número " + numeroTabuada + ": </big>");

    while(contador <= 10) {
     mostra(numeroTabuada + " x " + contador + " = " + (numeroTabuada * contador));
     contador++;
    }

    mostra("Fim");
