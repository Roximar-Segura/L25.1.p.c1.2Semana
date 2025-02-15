export default class CL_Trabajador{
    constructor(nombre,horasR, tiempoE){
        this.nombre = nombre;
        this.horasR = horasR;
        this.tiempoE = tiempoE;
}  
set Nombre(nombre){
    this.nombre = nombre;
}
get Nombre(){
    return this.nombre;
}
set HorasR(horasR){
    this.horasR = +horasR;
}
get HorasR(){
    return this.horasR;
}
set TiempoE (tiempoE){
    this.tiempoE = tiempoE ;
}
get TiempoE(){
    return this.tiempoE;
}

pagaR(){
    return this.horasR * 10 ;
}

pagaExtra(){
    return this.tiempoE * 25;
}
salario(){
    return (this.pagaR()) + (this.pagaExtra());
}
}