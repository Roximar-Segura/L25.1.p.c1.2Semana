export default class CL_Vendedor{
    constructor(nombre, venta){
        this.nombre = nombre;
        
        this.venta = venta;
}  
set Nombre(nombre){
    this.nombre = nombre;
}
get Nombre(){
    return this.nombre;
}
set Venta(venta){
    this.venta = +venta;
}
get Venta(){
    return this.Venta;
}
}
