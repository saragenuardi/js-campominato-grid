 //Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.



//FUNCTIONS


const index = 100 ;

// Creare 100 celle che compongono la griglia
for (let i = 1; i <= index; i++) {
    // Prendere il riferimento alla griglia
    const gridContainer = document.querySelector(".grid-container");

    // Creare la cella, metterci all'interno il numero corrispondente
    const cell = document.createElement("div");
    cell.innerHTML = `<span>${i}</span>`

    // Dare uno stile grafico alla cella aggiungendogli una classe css
    cell.classList.add("grid-item");

    // Gestire il cambio colore al click della cell
    cell.addEventListener('click', function() {
        cell.classList.add("active");
    })

    // Aggiungere la cella al DOM, all'interno di .grid-container
    gridContainer.append(cell);
}


console.log(index)
//





