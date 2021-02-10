let n = 0;
const arr = [];

const startArr = () =>{
    n++;
    arr.unshift(n);
    console.log(arr);
    setTimeout(startArr, 1000)
    if(arr.length > 9){
        arr.pop();
    }
}

window.addEventListener("DOMContentLoaded", startArr);
