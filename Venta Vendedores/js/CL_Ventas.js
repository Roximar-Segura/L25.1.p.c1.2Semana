export default class CL_Ventas {
    constructor(){
        this.cntVentasmenor = 0;
        this.cntVentasmayor = 0 ;
        this.acVentas = 0;
    }

    procesarVendedor(v){
        if (v.venta <= 100)
            this.cntVentasmenor++ ;

        if(v.venta > 100)
        this.cntVentasmayor++ ;

    this.acVentas += v.venta;
    }

    Menor(){
        return this.cntVentasmenor;
    }
    Mayor(){
        return this.cntVentasmayor;
    }
    MontoTotal(){
        return this.acVentas ;
    }
}