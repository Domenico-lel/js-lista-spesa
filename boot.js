// data la lista della spesa, stampare sulla pagina



// selezione Ul
const listUl = document.querySelector("#list"); 

// creo la lista della spesa
const listaSpesa = ["funghi", "pomodori", "carote", "melanzane"];


// scorro la lista della spesa 
for (let i = 0; i < listaSpesa.length; i++) {

    // mi salvo l'elemento iesimo della lista
    let itemIesimo = listaSpesa[i];

    // output elemento iesimo della lista 
    console.log(itemIesimo);


    // creiamo il LI
    const elementLi = document.createElement("li");
    // inseriamo dentro il li il contenuto
    elementLi.append(itemIesimo);
    // creamo il nuovo LI creato dentro l'UL
    listUl.append(elementLi);

}