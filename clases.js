class Coche {
    constructor(numero_pasajeros, capacidad_maletero, potencia) {
         this.numero_pasajeros = numero_pasajeros;
         this.capacidad_maletero = capacidad_maletero;
         this.potencia = potencia;
         this.velocidad = 0;
}
    acelerar() {
         this.velocidad += 10;
         console.info("Acelerar hasta " + this.velocidad);
}
    frenar () {
         this.velocidad -= 10;
         console.info("Frenar hasta " + this.velocidad);
}
    girar(direccion) {
         console.info("Girar hacia " + direccion);
} }

// Crear un objeto: instanciar una clase
// recuerda: constructor(numero_pasajeros, capacidad_maletero, potencia)
let coche = new Coche(5, 100, 120);
// Comprobamos la velocidad del coche
console.info(coche.velocidad);
// Acelerar dos veces
coche.acelerar(); // 20: hemos acelerado 2 veces
coche.acelerar(); // 20: hemos acelerado 2 veces
console.info(coche.velocidad);
// Frenar una vez
coche.frenar(); // Frenar hasta 10
console.info(coche.velocidad);
// Girar a la izquierda
coche.girar("izquierda");
// 0: no hemos acelerado
    // Acelerar hasta 10
    // Acelerar hasta 20


