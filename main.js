// 1) Inizializzo una variabile index e le assegno il valore iniziale di 1.

// 2) Stabilisco la condizione da verificare: se la variabile index è minore o uguale a 100, la condinzione è vera.

// 3) Imposto l'incremento del valore di index.

for(let i = 1; i <= 100; i++) { 
   
/* 4) Aggiungo altre tre condizioni:
- se index è multiplo di 3 stampo "Fizz";
- se index è multiplo di 5 stampo "Buzz";
- se index è multiplo di 3 e di 5 stampo "FizzBuzz".
*/

if(i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz');

} else if(i % 3 === 0){
    console.log('Fizz');

} else if(i % 5 === 0){
    console.log('Buzz');
}

 else{
    console.log(i);
}

}