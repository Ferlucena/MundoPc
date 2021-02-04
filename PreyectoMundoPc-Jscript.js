/**
 * *POO en JavaScript
 * @author Ferlucena
 * @version 1.1
 * Integración de contenidos POO, clases, herencias, agregación
 * */

 class DispositivoEntrada{
     //Atributos
     constructor(tipoEntrada, marca){
         this._tipoEntrada = tipoEntrada;
         this._marca = marca;
     }
     //<------ Zona Métodos ------>
     //Getters
     get tipoEntrada(){
         return this._tipoEntrada;
     }
     get marca(){
         return this._marca;
     }
     //Setters
     set tipoEntrada(tipoEntrada){
         this._tipoEntrada = tipoEntrada;
     }
     set marca(marca){
         this._marca = marca;
     }
 }

 class Raton extends DispositivoEntrada{
    //Declaro variables de clase 
    static contadorRatones = 0;

    //<------ Constructor ------->
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = Raton.contadorRatones++;
    }
    //<------ Zona Métodos ------>
    //Getters
    get idRaton(){
        return this._idRaton;
    }
    //toString
    toString(){
        return `{ idRaton: ${this._idRaton}, Tipo: ${this._tipoEntrada}, Marca:${this._marca}}`}
}

class Teclado extends DispositivoEntrada{
    //Declaro variables de entrada
    static contadorTeclados = 0;

    //<------ Constructor ------->
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = Teclado.contadorTeclados++;
    }
    //<------ Zona Métodos ------>
    //Getters
    get idTeclado(){
        return this._idTeclado;
    }
    //toString
    toString(){
        return `{ idTeclado: ${this._idTeclado}, Tipo: ${this._tipoEntrada}, Marca:${this._marca}}`
    }
}