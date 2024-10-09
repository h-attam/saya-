let globalcounter =0;

function increase(){
    let display=document.getElementById("counter");
    display.innerHTML= ++globalcounter;
    updateColor(globalcounter)
}

function decrease(){
    let display=document.getElementById("counter");
    display.innerHTML= --globalcounter;
    updateColor(globalcounter)
}

function reset(){
    let display=document.getElementById("counter");
    globalcounter=0;
    display.innerText =globalcounter;
    updateColor(globalcounter);
}
function updateColor (x){
    let display = document.getElementById("counter")

    if(x==00){
        display.style.color="#000"
    } else if(x<0){
        display.style.color="#d32f"
    }else if(x>0){
        display.style.color="#000080"
    }
}