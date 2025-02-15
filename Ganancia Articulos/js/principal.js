/**GANANCIA ARTÍCULOS
Conociendo el código, costo y el precio de venta de los artículos que vende una tienda, se
desea hacer un procesamiento que determine la ganancia total que tendría la empresa al
venderlos todos, y también el código del artículo con mayor precio de venta.
El encargado de la tienda informa que dispone de los siguientes artículos: 888 (costo $10,
precio venta $15), 777 (costo $20, precio $25), 999 ($15, $25), 666 ($25, $35), 111 ($50, $70),
333 ($40, $50), 444 ($80, $100) y 222 ($5, $10)
Ganancia Total: 85$
Código del artículo con mayor precio de venta: 444*/

import Cl_Articulo from "./CL_Articulos.js";
import CL_Tienda from "./CL_Tienda.js";

let art1 = new Cl_Articulo(888,10,15) ;
let art2 = new Cl_Articulo(777, 20,25) ;
let art3 = new Cl_Articulo(999,15,25) ;
let art4 = new Cl_Articulo(666,25,35) ;
let art5 = new Cl_Articulo(111,50,70) ;
let art6 = new Cl_Articulo(333,40,50) ;
let art7 = new Cl_Articulo(444,80,100) ;
let art8 = new Cl_Articulo(222,5,10) ;

let tie = new CL_Tienda();
tie.procesarArticulo(art1);
tie.procesarArticulo(art2); 
tie.procesarArticulo(art3);
tie.procesarArticulo(art4);
tie.procesarArticulo(art5);
tie.procesarArticulo(art6);
tie.procesarArticulo(art7);
tie.procesarArticulo(art8);

 let salida = document.getElementById("salida")
 salida.innerHTML = `
<br> TIENDA
    <br> Ganancia Total: ${tie.gananciaTotal()}
    <br> Código del artículo con mayor precio de venta: ${tie.codigoMayor()} `