export default class Cl_Articulo{
    constructor(codigo,costo, precioV){
        this.codigo = codigo;
        this.costo = costo;
        this.precioV = precioV;
    }
set codigo(codigo){
    this._codigo= codigo;
}
get codigo(){
    return this._codigo;
}
set costo(costo){
    this._costo = +costo;
}
get costo(){
    return this._costo;
}
set precioV(precioV){
    this._precioV = +precioV;
}
get precioV(){
    return this._precioV
}

}