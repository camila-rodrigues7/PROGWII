var val;
var time;

function inicia(){
    
    val = document.getElementById('valor');
    time = Number(val.value);
    setTimeout("contador()", 2000);
}

function contador(){
    
    if(time > 0){
        time = time -1;
        if(time == 0){
            time = "BUUUUMMMMMM!"
        }
    }

    tempo.innerText = time;
    setTimeout("contador()", 1000);
}