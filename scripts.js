let numero

numero = prompt("Ecribe un número del 1 al 10")

while(isNaN(numero) || numero<1 || numero>10){
    alert("No inresaste un número entre 1 y 10. Volvé a intentarlo.")
    numero = prompt("Ecribe un número del 1 al 10")
}

alert ("El número que elegiste es " + numero + ". ¡Felicitaciones!")

