// EXERCICE 1

// function myLength(a) {
//     let length = 0;
//     let j;
//     for(let i = 0; j !== ''; i++) {
//         j = a.charAt(i)
//         length++
//     }
//     console.log(length)
// }

// let Ex1 = myLength('Gamjhjvjghgcerss')

// EXERCICE 2

// function myTrim(a) {
//     let z = a
//     let length = 0;
//     let charac;
//     for(let i = 0; charac !== ''; i++) {
//         charac = a.charAt(i);
//         if(charac === ' ') {
//             a = a.replace(charac, '');
//         }
//     }
//     console.log(a);
// }

// let Ex2 = myTrim(' Gamerss for Ea')

// EXERCICE 1Bis

// function nbre3() {
//     let number = parseInt(prompt('Tapez un chiffre entre 1 et 3'), 10);
//     console.log(number)
//     while(number < 1 || number > 3) {
//         alert('Le nombre ne respecte pas les critères.');
//         number = parseInt(prompt('Tapez un chiffre entre 0 et 10'), 10);
//     }
//     alert('Bienjoué');
// }

// let Ex1Bis = nbre3() 

// EXERCICE 2Bis

// function nbres20() {
//     let number = parseInt(prompt('Tapez un nombre.'), 10);
//     let win = 0;
//     while(win === 0) {
//         if(number < 10) {
//             alert('C\'est plus');
//             number = prompt('Tapez un nombre.');
//         } else if(number > 20 ) {
//                 alert('C\'est moins');
//                 number = prompt('Tapez un nombre.');
//             } else {
//                 alert('Vous avez trouvé un bon nombre. Bravo !');
//                 win++
//                 break;
//             } 
//     }
// }

// let Ex2Bis = nbres20()

// EXERCICE 3

// function plus10() {
//     let i = 0;
//     let number = parseInt(prompt('Choisissez votre nombre'));  
//     while(i !== 10) {
//         number++
//         document.write(number + ' // ')
//         i++
//     }
// }

// let Ex3 = plus10()

// EXERCICE 4

// function plus10() {
//     let number = parseInt(prompt('Choisissez votre nombre'))    
//     for(let i = 0; i !== 10; i++){
//         number++
//         document.write(number + ' // ')
//     }
// }

// EXERCICE 5

// function plus10() {
//     let result; 
//     let number = parseInt(prompt('Choisissez votre nombre'))    
//     for(let i = 0; i !== 11; i++){
//         result = number * i
//         console.log(result + ' = ' + number + ' x ' + i)
//     }
// }

// let Ex5 = plus10()

// EXERCICE 6 

// function plusIncr() {
//     let result = 0;
//     let number = parseInt(prompt())
//     for(let i = 0; i <= number; i++) {
//         result = result + i;
//     }
//     console.log(result)
// }

// let Ex6 = plusIncr()

// EXERCICE 7

// function plusIncr() {
//     let result = 1;
//     let number = parseInt(prompt())
//     for(let i = 1; i <= number; i++) {
//         result = result * i;
//     }
//     console.log(result)
// }

// let Ex7 = plusIncr()

// EXERCICE 8

function nbres20() {
    let tab = [];
    for(let i = 0; i <= 4; i++) {
        rep = parseInt(prompt())
        tab.push(rep)
    }
    let max = Math.max(...tab)
    let index = tab.indexOf(max) +1
    console.log(index);
}

function nbres20() {
