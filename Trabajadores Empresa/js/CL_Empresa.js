export default class CL_Empresa{
    constructor(){
        this.acPago = 0;
        this.acExtra = 0 ;
    }
    procesarTrabajador(tr){
        this.acPago += tr.pagaR() ;
        this.acExtra += tr.pagaExtra();
    }

    MontoTotal(){
        return (this.acPago + this.acExtra);
    }
}