export default class CL_Persona{
    constructor(nombre,ingreso){
        this.nombre = nombre;
        this.ingreso = ingreso;
}  
set Nombre(nombre){
    this.nombre = nombre;
}
get Nombre(){
    return this.nombre;
}
set Ingreso(ingreso){
    this.ingreso = ingreso;
}
get Ingreso(){
    return this.ingreso;}
}