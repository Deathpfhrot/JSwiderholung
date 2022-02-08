//JS Vertiefung - Boolean Comparisions

// lev1_14: Boolean

console.log(Boolean(100));
console.log(Boolean(3.14));
console.log(Boolean(-15));
console.log(Boolean("hello"));
console.log(Boolean("false"));
console.log(Boolean(1 + 7 + 3.14));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean(1));
console.log(Boolean(-1));


// lev1_15: Comparisons

let num = 5;
let anotherNum = 8;

console.log(num == anotherNum); //false nicht gleich im inhalt
console.log(num > anotherNum); //false
console.log(num < anotherNum); //true
console.log(num >= anotherNum); //false
console.log(num <= anotherNum); //true

console.log(num == "5"); //true
console.log(num != 8); //true
console.log(num != "5"); //false

console.log("-------------------");
// lev1_4: type-conversion

console.log(typeof("John")); //string 
console.log(typeof(3.14)); //number
console.log(typeof(NaN)); //number interressant
console.log(typeof(false)); //boolean
console.log(typeof([1,2,3,4])); //object 
console.log(typeof({name:'John', age:34})); //object 
console.log(typeof(function(){})); //function
console.log(typeof(null));  //object
console.log(typeof(3+2==5)); //boolean
console.log(typeof(3 + "3")); //string? 

console.log((typeof(undefiend)));

console.log("-------------------");
//lev1_8: arithmetic operators

let x = 20;
let y = 30;
let z = 10;

let xy = x * y
let resultOne = xy / z


console.log(x+y);
console.log(y-x);
console.log(x-y);
console.log(x*y); // 600
console.log(x/y); // 0.66
console.log(xy);
console.log(resultOne);

//Aufgabenstellung2

let a = 15
a++
let b = 9
b--
let c = 20
let ab = a + b
let resultThree = a - b

let resultTwo = ab * c

// let rest = a%b;

let rest = resultOne%resultTwo

console.log(rest);
console.log(resultTwo);
console.log(a);
console.log(b);
console.log(resultThree);


//JS Vertiefung - DOM Elements

// lev2_1 DOM Elements


function colorChanger(){
    document.getElementById('navHome').innerHTML = "emoH"
    navHome.classList.add('colorPink')

}

// Übung lev2_2 Dom Elements

let vorname = document.getElementById('vorname')
let nachname = document.getElementById('nachname')
let land = document.getElementById('land')

function formButton(){
    console.log(vorname.value)
    console.log(nachname.value);
    console.log(land.value);
}

// Übung lev2_10: add / remove classList
let list = document.getElementById('element')

function smallButton(){
    list.classList.add('smallBorder')
    list.classList.remove('middleBorder')
    list.classList.remove('bigBorder')
}

function middleButton(){
    list.classList.add('middleBorder')
    list.classList.remove('smallBorder')
    list.classList.remove('bigBorder')
}

function bigButton(){
    list.classList.add('bigBorder')
    list.classList.remove('middleBorder')
    list.classList.remove('smallBorder')
}

// lev2_11 DOM Random Background Colors

let bodyColor = document.getElementById('bodyColor')

function randomColors(){
    let red = Math.floor(Math. random() * 256);
    let green = Math.floor(Math. random() * 256);
    let blue = Math.floor(Math. random() * 256);
     bodyColor.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

Math.random();

console.log(Math.random());