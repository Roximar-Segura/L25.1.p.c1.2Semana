export default class CL_Tienda{
    constructor(){
        this.acPrecio = 0;
        this.acCosto = 0;
        this.precioMayor = 0;
        this.codPrecio = "";
    }
    procesarArticulo(a){
        
        this.acPrecio += a.precioV;
        this.acCosto += a.costo;
    
        if(a.precioV > this.precioMayor){
            this.precioMayor = a.precioV;
            this.codPrecio = a.codigo;
        }
    }

    gananciaTotal(){
        return this.acPrecio - this.acCosto;
    }
    codigoMayor(){
        return this.codPrecio;
    }
}