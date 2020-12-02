
function calculoAtualizado(valor){
    
    var valorAtualizado = 0;
    if(valor >= 1800){
        valorAtualizado = valor * 1.05;
    }else if(valor >= 1300 && valor < 1800){
        valorAtualizado = valor * 1.10;
    }else if(valor > 980 && valor < 1300){
        valorAtualizado = valor * 1.15;
    }else if(valor <= 980){
        valorAtualizado = valor * 1.20;
    }

    return valorAtualizado;
}

function porcentagem(valor){
    if(valor >= 1800){
        porcentagem = 5 + "%";
    }else if(valor >= 1300 && valor < 1800){
        porcentagem = 10 + "%";
    }else if(valor > 980 && valor < 1300){
        porcentagem = 15 + "%";
    }else if(valor <= 980){
        porcentagem = 20 + "%";
    }

    return porcentagem;
}

document.getElementById("reajuste").onclick = function(){

    var valor = document.getElementById("valor").value;
    
    var atualizado = calculoAtualizado(valor);
    var porcent = porcentagem(valor);
    

    var valorAumento = atualizado - valor;

    document.getElementById("salario_antes").innerHTML = "R$"+valor;
    document.getElementById("percentual").innerHTML = porcent;
    document.getElementById("aumento").innerHTML = "R$"+valorAumento;
    document.getElementById("novo_salario").innerHTML = "R$"+atualizado;

}