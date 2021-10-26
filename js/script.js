/* Scrivi un programma che esegua un ciclo da 1 a 100
e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice
per i multipli di 3,
per i multipli di 5
e per i valori che sono sia multipli di 3 che di 5. */

const contSquare = document.querySelector("#container-square");
// creo un ciclo con una serie di quadrati con all'interno un numero
for (let i = 1; i <= 100; i++){

    // metodo 1
   /*  contSquare.innerHTML += `<div class="square">
    ${i}
    </div>` */

    // metodo 2
    let square = document.createElement("div");
    square.className = "square";
    square.append(i);
    contSquare.append(square);

    if (i % 5 === 0 && i % 3 === 0) {
        // se il numero è multiplo sia di 3 che di 5 compare la scritta fizzbuz
        square.classList.add("fizzbuzz");
        square.innerHTML = "FizzBuzz";
    }else if (i % 3 == 0){
    // se il numero è multiplo di 3 compare la scritta fizz
        square.classList.add("fizz");
        square.innerHTML = "Fizz";
    } else if (i % 5 == 0){
        // se il numero è multiplo di 5 compare la scritta buz
        square.classList.add("buzz");
        square.innerHTML = "Buzz";
    }
}
