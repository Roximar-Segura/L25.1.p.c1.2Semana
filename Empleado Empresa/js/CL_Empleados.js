export default class CL_Empleados {
    constructor(nombre, sexo){
        this.nombre = nombre;
        
        this.sexo = sexo;
}  
set Nombre(nombre){
    this.nombre = nombre;
}
get Nombre(){
    return this.nombre;
}
set Sexo(sexo){
    this.sexo = sexo;
}
get Sexo(){
    return this.sexo;
}
}  
