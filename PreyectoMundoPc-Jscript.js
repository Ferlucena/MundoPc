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
    this._idRaton = Raton.contadorRatones++;
  }
  //<------ Zona Métodos ------>
  //Getters
  get idRaton() {
    return this._idRaton;
  }
  //toString
  toString() {
    return `{ idRaton: ${this._idRaton}, Tipo: ${this._tipoEntrada}, Marca:${this._marca}}`;
  }
}

class Teclado extends DispositivoEntrada {
  //Declaro variables de clase
  static contadorTeclados = 0;

  //<------ Constructor ------->
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = Teclado.contadorTeclados++;
  }
  //<------ Zona Métodos ------>
  //Getters
  get idTeclado() {
    return this._idTeclado;
  }
  //toString
  toString() {
    return `{ idTeclado: ${this._idTeclado}, Tipo: ${this._tipoEntrada}, Marca:${this._marca}}`;
  }
}

class Monitor {
  //Declaro variables de clase
  static contadorMonitores = 0;

  //<------- Constructor ------->
  constructor(marca, size) {
    this._idMonitor = Monitor.contadorMonitores++;
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
    return `{idMonitor: ${this._idMonitor} Marca: ${this._marca} Tamaño: ${this._size}}`;
  }
}

/*
 * ***** Clases de Agregación *****
 */
class Computadora {
  //Declaro variables de clase
  static contadorComputadoras = 0;

  //<------- Constructor ------->
  constructor(){
    this._idComputadora = Computadora.contadorComputadoras++;
    this._nombre = 'nombre';
    this._computadora = [];
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

  //Armo computadoras
  agregaPerifericos(periferico){
      this._computadora.push(periferico);
  }

  //TODO Agrego toString?????

}

let monitor1 = new Monitor ('Xview', '24 pulgadas');
let mouse1 = new Raton ('USB', 'Genius');
let teclado1 = new Teclado('Bluethoot', 'Logitech');

let computadora1 = new Computadora();

computadora1.nombre = 'compu1';
computadora1.agregaPerifericos(monitor1);
computadora1.agregaPerifericos(mouse1);
computadora1.agregaPerifericos(teclado1);

console.log(computadora1.nombre);




