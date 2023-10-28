//Soy la verdad y la mentira
const verdadero = true;
const falso = false;

//Cierto y falso
let verdad = 2 > 1;  //true
let falso = 2 < 1;  //falso
let iguales = 2 == 2;  //true
let distintos = 2 == 1;  //false
let casi_igual = 3 >= 1; //true
let diferentes = 3 != 1; //true (son diferentes)
let no_diferentes = 2 != 2; // (no son diferentes)

// Ese no soy yo
const mi_nombre = "alfonso";
const su_nombre = "manuel";
let soy_yo = (mi_nombre == su_nombre); //false

//Negar la realidad
console.info("Esto es falso:" +!true); 
console.info("Esto es verdadero:" +!false);

// También podemos encadenar condiciones
// ejemplo: si esto y esto
let ambas_cosas = (3 > 2) && ("a" == "a"); //true
let no_ambas_cosas = (3 > 2) && ("a" != "a"); //false

// Si esto o aquello
let esto_o_lo_otro = (3 > 2) || ("a" != "a"); true

// También podemos negar cosas
let es_falso = !true; //false
let es_cierto = !false;  //false


