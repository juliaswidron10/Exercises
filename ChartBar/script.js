let randomNumber;
let dayNumber = 1;
const listOfDays = document.querySelector('#listOfDays');

const getRandomNumber = () => {
    return randomNumber = Math.floor(Math.random()*32);
};

const init = () => {
    setInterval(generateCustomerBar , 500);
}

const generateCustomerBar = () =>{
    getRandomNumber();
    let newDay = document.createElement('li');
    newDay.style.height = `${(randomNumber * 0.5)}rem`;
    newDay.textContent = `Day ${dayNumber}`;
    newDay.classList.add('oldDay')
    dayNumber++;
    listOfDays.appendChild(newDay);
    // I know it supposed to be 40 but it looks better when it's just 30
    if(dayNumber > 30){
        listOfDays.removeChild(listOfDays.childNodes[0]);
    }
}
init();