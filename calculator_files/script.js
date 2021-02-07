const calculate = document.querySelector("#calculate");
const results = document.querySelector("#results");
const clearbutton = document.querySelector("#clear");

const calculation = () => {
    let input1 = document.querySelector('#firstnumber').value;
    let input2 = document.querySelector("#secondnumber").value;
    let operator = document.querySelector('#operator').value;
    console.log(input1);
    console.log(input2);
    console.log(operator);
    let result;
    switch(operator){
        case 'add' :
            result = Number(input1) + Number(input2);
            break;
        case 'sub':
            result = Number(input1) - Number(input2);
            break;
        case 'mul':
            result = Number(input1) * Number(input2);
            break;
        default: 
            result = Number(input1) / Number(input2);
    } 
    console.log(result);
    showResult(result)
    return result
}

const showResult = (result) => {
    let newResult = document.createElement("LI");
    let rounding = document.querySelector('#decimals').value;
    let dodecimals = document.querySelector("#decimalss").value;
    // console.log(rounding);
    // console.log(dodecimals);
    if(dodecimals === "on"){
        let factor = Math.pow(10, rounding);
        result = Math.round(result * factor) / factor;
        console.log(result);
        // let newResult = document.createElement("LI");
        newResult.textContent = result;
    }else{
       
        newResult.textContent = result;
    }
    results.appendChild(newResult);
}

clearbutton.addEventListener("click", e=>{
    window.location.reload();
})
calculate.addEventListener("click", calculation);

// console.log(input1);
// console.log(input2);
// console.log(operator);