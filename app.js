function addValue(sentValue){
    document.getElementById('txtInput').value =  document.getElementById('txtInput').value + sentValue;
}
function equals(){
    let expression = document.getElementById('txtInput').value;
    if(eval(expression)){
        document.getElementById('txtInput').value = eval(expression);
    }    
}