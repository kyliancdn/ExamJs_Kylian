// EXERCICE 1

//      C = 24 

// EXERCICE 2

//      C = '12312'

// EXERCICE 3

// let prix;
// function taxe() {
//     prix = parseInt(prompt('Quel est le prix de l\'objet ?'), 10);
//     alert('Voilà sa valeur TTC : ' + prix * 1.196);
//     }

// let Ex3 = taxe()


// EXERCICE 4

// function NomPrenom() {
//     let prenom = prompt('Quel est votre prénom ?');
//     let nom = prompt('Quel est votre nom ?');
//     document.write('Bonjour ' + prenom + ' votre nom est ' + nom);
// }

// let Ex4 = NomPrenom()

// EXERCICE 5

// let result;

// function signe() {
//    let num1 = parseInt(prompt('Choisissez votre premier nombre.'), 10);
//    let num2 = parseInt(prompt('Choisissez votre deuxième nombre.'), 10);
//     result = Math.sign(num1 * num2);
//     if(result === 1) {
//         alert('le produit de ces 2 nombre est positif.');
//     } else if(result === -1) {
//         alert('le produit de ces 2 nombre est négatif.');
//         } else {
//             alert('le produit de ces 2 nombre est nul.');
//         }
// }

// let Ex5 = signe();

// EXERCICE 6

// let result;

// function pegi() {
//     let age = parseInt(prompt('Quel age avez-vous ?'), 10);
//     console.log(age);
//     if(age < 13) {
//         alert('On vous conseil Action Man.');
//     } else if( age >= 13 && age <= 18) {
//             alert('On vous conseil Matrix.');
//         } else{
//             alert('On vous conseil Evil Dead.');
//         }
// }

// let Ex6 = pegi()

// EXERCICE 7 

// function nbre10() {
//     let number = parseInt(prompt('Tapez un chiffre entre 0 et 10'), 10);
//     console.log(number)
//     while(number < 0 || number > 10) {
//         alert('Le nombre ne respecte pas les critères.');
//         number = parseInt(prompt('Tapez un chiffre entre 0 et 10'), 10);
//     }
//     alert('Bienjoué');
// }

// let Ex7 = nbre10()

// EXERCICE 8

// function suite() {
// let number = parseInt(prompt('Choisissez votre nombre.'))

// while(number !== 0) {
//     number--
//     document.write(number + ', ')
// }
// }

// let Ex8 = suite()

// EXERCICE 9

// let solution;
// let reponse;

// function justeprix() {
//     solution = Math.floor(Math.random() * 50);
//     console.log(solution)

//     reponse = prompt('Quel est le juste prix ?');

//     while (reponse !== solution) {
//         if(reponse < solution) {
//             alert('C\'est plus');
//             reponse = prompt('Quel est le juste prix ?');
//         } else if(reponse > solution) {
//                 alert('C\'est moins');
//                 reponse = prompt('Quel est le juste prix ?');
//             } else {
//                 alert('Vous avez trouvé le juste prix. Bravo !');
//                 break;
//             } 
//     }
// }

// let Ex9 = justeprix()

// EXERCICE 10 

// let chiffres = [10, 15, 20, 15, 14, 8]
// let sum = 0;
// function tableauSum() {
//     for(let i = 0; i < chiffres.length; i++) {
//         sum = sum + chiffres[i]
//     }
//     alert('la somme des valeurs du tableau est ' + sum);
// }

// let Ex10 = tableauSum()

// EXERCICE 11 

// function notes() {
//     let nbr = parseInt(prompt('Combien y a t-il d\'éléves ?'));
//     let eleves = []

//     for(let i = 0; i < nbr; i++) {
//         let nito = eleves.push(Math.floor(Math.random()*20));
//         document.write(eleves[eleves.length -1] + ' // ');
//     }
// }

// let Ex11 = notes()

// EXERCICE 12 

// function notes() {
//     let nbr = parseInt(prompt('Combien y a t-il d\'éléves ?'));
//     let eleves = []

//     for(let i = 0; i < nbr; i++) {
//         let nito = eleves.push(Math.floor(Math.random()*20));
//         if(eleves[eleves.length -1] >= 10){
//             document.write(eleves[eleves.length -1] + ' // ');
//         }
//     }
// }

// let Ex12 = notes()

// EXERCICE 13

// let nbres = [[0, 18], [1, 45], [45, 48], [-3, 2]];
// let tab1;
// let tab2 = -1;
// let max = nbres[0][0];

// for(let i = 0; i < nbres.length * 2; i++) {
    
//     if(i % 2 === 0) {
//         tab1 = 0;
//     } else {
//         tab1 = 1;
//     }
//     console.log(tab1);

//     if(tab1 === 0) {
//         tab2++;
//     }
//     console.log(tab2);

//     if(max < nbres[tab2][tab1]){
//         max = nbres[tab2][tab1];
//     }
// }

// alert('la plus grande valeur dans ce tableau multidimensionnel est ' + max);

// EXERCICE 14

// function letterLength() {
//     let mot = prompt('Tapez votre mot');
//     let length = mot.substr(0).length;
//     alert(length);
// }

// let Ex14 = letterLength();