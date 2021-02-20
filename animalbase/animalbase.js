"use strict";

window.addEventListener("DOMContentLoaded", start);

const cat = document.querySelector('#Cats');
const dog = document.querySelector('#Dogs');
const all = document.querySelector('#All');

const buttons = document.getElementsByClassName("filter");


let allAnimals = [];
let animalsToDisplay = [];

// The prototype for all animals: 
const Animal = {
    name: "",
    desc: "-unknown animal-",
    type: "",
    age: 0
};

function start( ) {
    console.log("ready");
    // TODO: Add event-listeners to filter and sort buttons

    cat.addEventListener('click', function(){
        filterAnimals(cat)
    });
    dog.addEventListener('click',function(){
        filterAnimals(dog)
    });
    all.addEventListener('click', function(){
        filterAnimals(all)
    });

    loadJSON();
}


async function loadJSON() {
    const response = await fetch("animals.json");
    const jsonData = await response.json();
    
    // when loaded, prepare data objects
    prepareObjects( jsonData );
}

function prepareObjects( jsonData ) {
    allAnimals = jsonData.map( preapareObject );

    // TODO: This might not be the function we want to call first
    // displayList(allAnimals);
    filterAnimals(all);
}

function preapareObject( jsonObject ) {
    const animal = Object.create(Animal);
    
    const texts = jsonObject.fullname.split(" ");
    animal.name = texts[0];
    animal.desc = texts[2];
    animal.type = texts[3];
    animal.age = jsonObject.age;

    return animal;
}

function filterAnimals(filter) {
    let filterBy = filter.textContent;
    cleanTable;
    // displayAnimals(filterBy);
    if (filterBy === 'Only Dogs'){
        filterBy = 'dog';
    } else if (filterBy === 'Only Cats'){
        filterBy = 'cat';
    } else {
        filterBy = '';
    }
    displayList(allAnimals, filterBy)

    console.log(filterBy);
    console.log(allAnimals);
  
}

function cleanTable(){
    const table = document.querySelector('#sorting');
    while(table.firstChild){
        table.removeChild(table.lastChild);
    }
}
// function displayAnimals(filterBy){
//     switch(filterBy) {
//         case Only Dogs :
//             if(animal.type === '' )

//     }
// }

function displayList(animals , filterBy) {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    
    console.log(filterBy);
    if(filterBy === 'dog' || filterBy === 'cat'){
        animalsToDisplay = animals.filter(animal => animal.type === filterBy);
    }else{
        animalsToDisplay = animals
    }
    
    animalsToDisplay.forEach(displayAnimal);
    // animals.forEach( displayAnimal );
}

// function filterList(){

// }

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}


