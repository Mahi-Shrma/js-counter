let value=0;
const counter= document.getElementById('val');
const IncrementBtn= document.getElementById('incre-btn');
const DecrementBtn= document.getElementById("decre-btn");
const ClearBtn= document.getElementById("clear-btn");


IncrementBtn.addEventListener('click',()=>{
    value++;
    counter.innerHTML=value;
});
DecrementBtn.addEventListener('click',()=>{
    // if(value=0){
    //     let displayError=document.createElement("div");
    //     displayError.innertext="Error: Cannot go below 0";
    //     displayError.style.color="red";
    // }
    // else{
    //     value--;
    //     counter.innerText=value;
    // }
    value--;
     counter.innerText=value;
});
ClearBtn.addEventListener('click',()=>{
    value=0;
    counter.innerText=value;
});