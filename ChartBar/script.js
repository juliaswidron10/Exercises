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
    if(dayNumber > 30){
        listOfDays.removeChild(listOfDays.childNodes[0]);
    }
}
init();