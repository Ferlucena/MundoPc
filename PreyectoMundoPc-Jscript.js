/**
 * *POO en JavaScript
 * @author Ferlucena
 * @version 1.1
 * Integración de contenidos POO, clases, herencias, agregación
 * */

class DispositivoEntrada {
  //Atributos
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }
  //<------ Zona Métodos ------>
  //Getters
  get tipoEntrada() {
    return this._tipoEntrada;
  }
  get marca() {
    return this._marca;
  }
  //Setters
  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }
  set marca(marca) {
    this._marca = marca;
  }
}

class Raton extends DispositivoEntrada {
  //Declaro variables de clase
  static contadorRatones = 0;

  //<------ Constructor ------->
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }
  //<------ Zona Métodos ------>
  //Getters
  get idRaton() {
    return this._idRaton;
  }
  //toString
  toString() {
    return `Ratón: [idRaton: ${this._idRaton} Tipo Entrada: ${this._tipoEntrada} Marca:${this._marca}]`;
  }
}

class Teclado extends DispositivoEntrada {
  //Declaro variables de clase
  static contadorTeclados = 0;

  //<------ Constructor ------->
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados;
  }
  //<------ Zona Métodos ------>
  //Getters
  get idTeclado() {
    return this._idTeclado;
  }
  //toString
  toString() {
    return `Teclado: [idTeclado: ${this._idTeclado} Tipo Entrada: ${this._tipoEntrada} Marca:${this._marca}]`;
  }
}

class Monitor {
  //Declaro variables de clase
  static contadorMonitores = 0;

  //<------- Constructor ------->
  constructor(marca, size) {
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._size = size;
  }
  //<------- Zona Métodos ------->
  //Getters
  get idMonitor() {
    return this._idMonitor;
  }
  get marca() {
    return this._marca;
  }
  get size() {
    return this._size;
  }

  //Setters
  set marca(marca) {
    this._marca = marca;
  }
  set size(size) {
    this._size = size;
  }

  //toString
  toString() {
    return `Monitor: [idMonitor: ${this._idMonitor} Marca: ${this._marca} Tamaño: ${this._size}]`;
  }
}

/*
 * ***** Clases de Agregación *****
 */
class Computadora {
  //Declaro variables de clase
  static contadorComputadoras = 0;

  //<------- Constructor ------->
  constructor(nombre, monitor, raton, teclado){
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = monitor;
    this._raton = raton;
    this._teclado = teclado;
  }

  //<------- Zona Métodos ------->
  //Getters
  get idComputadora(){
      return this._idComputadora;
  }
  get nombre(){
      return this._nombre;
  }

  //Setters
  set nombre(nombre){
      this._nombre = nombre;
  }

  //toString
  toString(){
    return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
  }
}

class Orden{
  // Atributos
  static contadorOrdenes = 0;

  constructor(){
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadoras = [];
  }

  //<------- Zona Métodos ------->
  //Getters
  get idOrden(){
    return this._idOrden;
  }

  //addComp: Metodo - Agrego computadoras a la orden --> de esta forma se relacionaran la clase orden con la clase computadora.

  addComp(computadora){
    this._computadoras.push(computadora); 
  }

  //mostrarOrden: como el toString, en este método llamamos el toString de cada elemento y lo concatenamos a una variable

  mostrarOrden(){
    let compuOrden = '';     // compuOrden es una variable temporal
    for( let computadora of this._computadoras){
        compuOrden += `\n ${computadora}`; 
        /* mando a llamar el objeto computadora para que directamente se llame el método toString de cada elemento del tipo computadora, 
        computadora tiene la referencia la referencia de cada uno de los objetos de tipo computadora*/ 
    }
    console.log(`Orden id: ${this._idOrden}, Computadoras: ${compuOrden}`);
}
}

// *<------- Zona de PRUEBAS -------> 

//Creación de perifericos
let monitor1 = new Monitor ('Xview', '24 pulgadas');
let monitor2 = new Monitor ('Samsung', '24 pulgadas');
console.log(monitor1.toString());
console.log(monitor2.toString());

let raton1 = new Raton ('USB', 'Genius');
let raton2 = new Raton ('Inalambrico', 'Logitech');
console.log(raton1.toString());
console.log(raton2.toString());

let teclado1 = new Teclado('Inalambrico', 'Logitech');
let teclado2 = new Teclado('USB', 'Genius');
console.log(teclado1.toString());
console.log(teclado2.toString());


// Armo computadoras
// Computadora 1
let computadora1 = new Computadora('HP', monitor1, raton1, teclado1);
console.log(computadora1.toString());
console.log(`${computadora1}`);  // Utilizando template String

//Computadora 2
let computadora2 = new Computadora('Ryzen 5', monitor2, raton2, teclado1);

// Computadora 3
let computadora3 = new Computadora('Core i5', monitor2, raton1, teclado2);
console.log(`${computadora3}`);

//Ingreso de Ordenes
let orden1 = new Orden();
orden1.addComp(computadora1);
orden1.addComp(computadora2);
orden1.addComp(computadora2);

let orden2 = new Orden();

//Visualizo las Ordenes
orden1.mostrarOrden();



 




