export default class CL_Ingreso{
    constructor(){
        this.menorIngreso = Infinity;
        this.cntIngreso = 0;
        this.acIngreso = 0;
    }
    procesarPersona(p){

            if(p.Ingreso < this.menorIngreso){
                this.menorIngreso = p.Ingreso;
            }
        
        this.cntIngreso++;
        this.acIngreso += p.Ingreso;
    }

    menorIng(){
        return this.menorIngreso ;
    }
    ingresoPromedio(){
        return (this.acIngreso / this.cntIngreso);
    }
}