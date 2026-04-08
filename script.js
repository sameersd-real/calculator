let display = document.getElementById("display")
function appendDisplay(x){
    display.innerText += x
}
function clearDisplay(){
    display.innerText = "";
}
function evaluatae(){
    try{
        display.innerText = eval(display.innerText);
    }catch{
        display.innerText="ERROR";
    }
}
function del(){
    display.innerText = display.innerText.slice(0,-1);
}