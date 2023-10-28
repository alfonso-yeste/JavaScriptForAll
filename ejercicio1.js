// Vamos a probar a trabajar con algunas variables de URL. Para ello, crea tres variables de tipo texto con las siguientes URLs:
//• URL1: https://www.ejemplo.tld/url-1
//• URL2: https://www.ejemplo.tld/url-2
//• URL3: https://www.ejemplo.tld/url-3
//• URL4: https://www.ejemplo.tld/url-3 (sí, es igual que la anterior)
//Pedimos que hagas lo siguiente:
//1. Declara las cuatro variables. Puedes poner el nombre que quieras. Usa console.info para ver su contenido.
//2. Crea una variable para comparar las primeras dos URLs para comprobar si son iguales. Usa console.info para ver el resultado de la comparación.
//3. Crea una variable para comparar la tercera y la cuarta URL. Usa console.info para ver el resultado.
//Más adelante haremos ejercicios más avanzados con URLs ☺


// Declaramos las variables de URL
let url1 = "https://www.ejemplo.tld/url-1";
let url2 = "https://www.ejemplo.tld/url-2";
let url3 = "https://www.ejemplo.tld/url-3";
let url4 = "https://www.ejemplo.tld/url-3";
// Creamos variable para comprobar si son iguales la 1 y la 2
let iguales1_y_2 = url1 == url2
console.info(iguales1_y_2);
// Creamos variable para comprobar si son iguales la 3 y la 4
let iguales3_y_4 = url3 == url4
console.info(iguales3_y_4);

