const text = document.querySelector('.TextToAnimate').textContent;
console.log(text);
window.addEventListener("DOMContentLoaded", changeToSpan);

function changeToSpan(){
    let toRemove = document.querySelector('.TextToAnimate')
    toRemove.parentNode.removeChild(toRemove);
        for (i = 0; i<text.length; i++){
            let letter = document.createElement("span");
            if(text[i] === ' '){
                letter.innerHTML = '_';
                letter.style.color = 'transparent';
                letter.classList.add('letter');
                // letter.classList.add('animation');
                document.querySelector('body').appendChild(letter);
            }else{
                letter.innerHTML = text[i];
                // letter.classList.add('animation');
                letter.classList.add('letter');
                document.querySelector('body').appendChild(letter);
            }
            // await timer(100);
        }
    //    await timer(100);

       document.querySelectorAll('.letter').forEach((e, i) =>{
           setTimeout(() =>{
            e.classList.add('animation');
            e.style.animationDelay = "1s";
           }, i * 100);
        })
    }