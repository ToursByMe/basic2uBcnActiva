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

    cleanFields();

    //the answer goes here
    let text;
    let finalArr = [];
    
    //get the name
    let name = document.getElementById('nombre').value;

    name = cleanStr(name);

    name = checkOnlyLetters(name);

    console.log(name);

    //now I am an array and separated
    name = name.split("");
    
    console.log(name);

    for(let i = 0; i < name.length; i++) {

        console.log(` ${name[i]},position ${i + 1} `);

       finalArr.push(name[i]);
        
    }

     document.getElementById('answer').innerHTML = finalArr.join().toUpperCase();
    
}
function findVocal() {

    console.log('fase2 works');

    cleanFields();

    //vowels
    let text = "";
    //num
    let num = "";
    //consonants
    let consonant = "";
    //empty
    let empty = "";
    
     //get the name
     let name = document.getElementById('nombre').value;

    // name = checkOnlyNum(name);

     name = cleanStr(name);
 
     console.log(name);

     //regex & match?

     let isAmatch = name.match(vowelReg);
     let numMatch = name.match(numReg);
     let conMatch = name.match(consonantReg);

     console.log(isAmatch);
     console.log(numMatch);
     console.log(conMatch);

    //(isAmatch === null) ? console.log('Not a vowels') : console.log(isAmatch.length);
    (isAmatch === null) ? console.log('Not a vowels') : console.log(isAmatch.length);
    (numMatch === null) ? console.log('Not a numbers') : console.log(numMatch.length); 
    (conMatch === null) ? console.log('Not a consonats') : console.log(conMatch.length);
    //how to use in a loop or map the regex?



    //for loop 
    for (let letter of name) {

        if (vowels.includes(letter)){

            text += `He trobat la VOCAL:${letter.toUpperCase()}${'<br>'}`;

            console.log(text);
        } else if ( numbers.includes(letter)) {

            num += `Tú no treballes a Star Wars i el teu nom no hauria de tenir el número ${letter} you fool!${'<br>'}`;

            console.log(num)
        } else {

            consonant += `He trobat la CONSONANT:${letter.toUpperCase()}${'<br>'}`;

            console.log(consonant);

        }

    }
    
    document.getElementById('answer').innerHTML = text;
    document.getElementById('answer1').innerHTML = num;
    document.getElementById('answer2').innerHTML = consonant;    

    
}
function letterMap() {

    console.log('fase3 works');

    cleanFields();

    //get the name
    let name = document.getElementById('nombre').value;

    name = cleanStr(name);
   
    console.log(name);
  
    //enunciat mostra uppercases
    name = name.toUpperCase();

    //convert it into arr
    let newArr = name.split("");

    //pintado
    let text = "";

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
        
        text += `The letter ${content}: ${obj[content]} times ${'<br>'}`;
        
    }

    document.getElementById('answer').innerHTML = text;
    
    //Isma, vull mirar-ho mes a prop
    // se que el map té les mateixes caracteristiques que els obj
    // i més...no se si ho estic fent servir be
    //de tota manera a l'anunciat tens un objecte, no un Map!

    
}
function repeatLetter() {

    console.log('fase4 works');

    cleanFields();

    //get the name
    let name    = document.getElementById('nombre').value;

    let surname = document.getElementById('apellido').value;
    
    
     name    = onlyOneSpace(name);
     surname = onlyOneSpace(surname);
    
     console.log(name);
     console.log(surname);

    /**********************concat str *****************************************/
    let strTogether = name.concat(surname);
     //enunciat mostra uppercases
     let newArr = strTogether.split("").map(letter => (letter.toUpperCase()));
      newArr.splice(6, 0, " ");

     console.log(newArr);

     /******************************concat arr **********************************/
    let nameArr = name.split("");
    let surnameArr = surname.split("");

    let arrTogether = nameArr.concat(surnameArr);
    let upper = arrTogether.map(e => e.toUpperCase());
     upper.splice(6, 0, " ");

     /********************ES6 ******************************/
     let newArr3 = [...name,  ...surname].map(e => e.toUpperCase());
      newArr3.splice(6, 0, " ");

    console.log(arrTogether);
    console.log(upper);
    console.log(newArr3);

    
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

//clean fileds
const cleanFields = () => document.getElementsByClassName('myLead').innerHTML = "";

/**************************DOCUMENTACION ********************/
//VOWELS
//https://www.codegrepper.com/code-examples/javascript/count+vowels+and+consonants+in+javascript

//Fase dos one liner
//let oneLine = name.split('').filter(vocal => vocal.match(vowelReg) != null).length;

/**
 * ['elem', 'another', 'name'].map((value, index, originalArray) => { 
  
});
 */

 //only one white space
 //https://stackoverflow.com/questions/6163169/replace-multiple-whitespaces-with-single-whitespace-in-javascript-string

//merge arrays
//https://www.samanthaming.com/tidbits/49-2-ways-to-merge-arrays/

//splice split slice
//https://medium.com/@jeanpan/javascript-splice-slice-split-745b1c1c05d2
