// tady je místo pro náš program

function vysledek(){
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
}
/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}


/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!")
  let ctverecText = document.querySelector(".ctverecek");
  ctverecText.textContent="Gratulace, právě jsi spustila tuto funkci!";
  ctverecText.style.width="400px"
}

function zmenBarvu(){
  let ctverecGreen = document.querySelector(".ctverecek");
  ctverecGreen.style.backgroundColor = 'green';
}




/** Vytvořte tlačítko, při jehož stisknutí se změní barva <strong>Čtvereček</strong> na zelenou.*/

/**Upravte kód tak, aby se výsledek funkce <em>secti()</em> zobrazil v prvku s ID <strong>vysledek</strong> až po stiknutí nově přidaného tlačítka "Zobraz výsledek */

/** Uprav funkci <em>upozorni()</em> tak, aby se navíc vypisoval text i do konzole a také nahradil text v elementu <strong>Čtvereček</strong>.*/