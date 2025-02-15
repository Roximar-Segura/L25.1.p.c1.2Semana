export default class CL_Empresa{
    constructor(){
        this.cntMujer = 0;
        this.cntHombres = 0;
        this.cntSexo = 0 ;
    }
    procesarEmpleados(e){
        if(e.sexo === "F")
            this.cntMujer++;
        if(e.sexo === "M")
            this.cntHombres++ ;
        this.cntSexo++ ;
    }

    Masculino(){
        return this.cntHombres++;
    }
    PorcF(){
        return (this.cntMujer*100)/ this.cntSexo;
    }
}