//"Do or do not, there is no try" (Master Yoda)

"use strict"

//get them all the buttons
let phase1 = document.getElementById('fase1');
let phase2 = document.getElementById('fase2');
let phase3 = document.getElementById('fase3');
let phase4 = document.getElementById('fase4');

//handlers
phase1.addEventListener('click', letterPosition);
phase2.addEventListener('click', findVocal);
phase3.addEventListener('click', letterMap);
phase4.addEventListener('click', repeatLetter);

//arrays to compare global
let vowels = ['a', 'e', 'i', 'o', 'u'];
let consonants = ['b', 'c', 'ç', 'd', 'f', 'g', 'h', 'j', 'l', 'l.l', 'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x','y', 'z']
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

 //regex global
 let vowelReg     = /[aeiou]/gi;
 let numReg       = /\d+/g;
 let consonantReg = /[bcçdfghjklmnñpqrstvwxys]/gi;

//main functions
function letterPosition() {
    
    console.log('fase1 works');

    //the answer goes here
    let text;
    let finalArr = [];
    
    //get the name
    let name1 = document.getElementById('nombre').value;

    name1 = cleanStr(name1);

    name1 = checkOnlyLetters(name1);

    console.log(name1);

    //now I am an array and separated
    name1 = name1.split("");
    
    console.log(name1);

    for(let i = 0; i < name1.length; i++) {

        console.log(` ${name1[i]},position ${i + 1} `);

       finalArr.push(name1[i]);
        
    }

     document.getElementById('answer').innerHTML = finalArr.join();
    
}
function findVocal() {

    console.log('fase2 works');

    //vowels
    let text = "";
    //num
    let num = "";
    //consonants
    let consonant = "";
    //empty
    let empty = "";
    
     //get the name
     let name1 = document.getElementById('nombre').value;

    // name1 = checkOnlyNum(name1);

     name1 = cleanStr(name1);
 
     console.log(name1);

     //enunciat mostra uppercases
     name1 = name1.toUpperCase();

     //regex & match?

     let isAmatch = name1.match(vowelReg);
     let numMatch = name1.match(numReg);
     let conMatch = name1.match(consonantReg);

     console.log(isAmatch);
     console.log(numMatch);
     console.log(conMatch);

    //(isAmatch === null) ? console.log('Not a vowels') : console.log(isAmatch.length);
    (isAmatch === null) ? console.log('Not a vowels') : console.log(isAmatch.length);
    (numMatch === null) ? console.log('Not a numbers') : console.log(numMatch.length); 
    (conMatch === null) ? console.log('Not a consonats') : console.log(conMatch.length);
    //how to use in a loop or map the regex?



    //for loop 
    for (let letter of name1) {

        if (vowels.includes(letter)){

            text = `He trobat la VOCAL:${letter}\n`;

            console.log(text);
        } else if ( numbers.includes(letter)) {

            num = `Tú no treballes a Star Wars i el teu nom no hauria de tenir el número ${letter} you fool!\n`;

            console.log(num)
        } else {

            consonant = `He trobat la CONSONANT:${letter}\n`;

            console.log(consonant);

        }

    }
    


    
}
function letterMap() {

    console.log('fase3 works');

    //get the name
    let name1 = document.getElementById('nombre').value;

    name1 = cleanStr(name1);
   
    console.log(name1);
  
    //enunciat mostra uppercases
    name1 = name1.toUpperCase();

    //convert it into arr
    let newArr = name1.split("");

    //object of desire

    //let obj = {};

    let obj = new Map;

    //loop through the arr
    for(let letter in newArr) {

        //are you there? no? then zero
        obj[newArr[letter]] = obj[newArr[letter]] || 0;
        //are u in? then one more
        obj[newArr[letter]]++;
    }
    console.log(obj);

    //to look insisde also for in
    for(let content in obj) {

        console.log(`The letter ${content}: ${obj[content]} times`);
    }
    
    //Isma, vull mirar-ho mes a prop
    // se que el map té les mateixes caracteristiques que els obj
    // i més...no se si ho estic fent servir be
    //de tota manera a l'anunciat tens un objecte, no un Map!

    
}
function repeatLetter() {

    console.log('fase4 works');

    //get the name
    let name1 = document.getElementById('nombre').value;
    // name1 = checkOnlyNum(name1);
    
     name1 = onlyOneSpace(name1);
    
     console.log(name1);
    
     //enunciat mostra uppercases
     let newArr = name1.split("").map(letter => (letter.toUpperCase()));

     console.log(newArr);
    
}

//aux functions

function checkOnlyLetters(str) {

    let regexForm = /^[a-zA-Z]+$/;

    let resolved  = false;

    let senditBack;

    (!regexForm.test(str)) ? resolved : resolved = true;

    (resolved == true) ? senditBack = str : alert('Insert ONLY letters pls');

    console.log(resolved);

    return senditBack;
    
}

function cleanStr(str) {

    // clean it up
    str = str.toLowerCase(str).replace(/\s/g, "").trim();

    return str;
}

//only one white space between name and surname
const onlyOneSpace = (str) => str.replace(/\s+/g, ' ').trim();


/**************************DOCUMENTACION ********************/
//VOWELS
//https://www.codegrepper.com/code-examples/javascript/count+vowels+and+consonants+in+javascript

//Fase dos one liner
//let oneLine = name1.split('').filter(vocal => vocal.match(vowelReg) != null).length;

/**
 * ['elem', 'another', 'name'].map((value, index, originalArray) => { 
  
});
 */

 //only one white space
 //https://stackoverflow.com/questions/6163169/replace-multiple-whitespaces-with-single-whitespace-in-javascript-string

