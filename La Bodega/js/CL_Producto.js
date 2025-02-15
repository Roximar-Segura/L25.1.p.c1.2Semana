export default class CL_Producto{
    constructor(costo){
        this.costo = costo;
    }

    set costo(costo){
        this._costo = +costo;
    }

    get costo(){
        return this._costo;
    }

    ganancia(){
        return this.costo * 0.5
    }
}