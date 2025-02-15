/**VENTAS VENDEDORES
Se conoce el monto de ventas de varios vendedores. Se desea conocer la cantidad de ventas
que fueron por 100$ o menos, cantidad de ventas mayores a 100$. Asimismo, se desea saber el
monto total en $ de todas las ventas.
Se dispone de los siguientes datos de varias vendedores: (nombre, monto venta)
(Mary, 150), (José, 135), (Carlos, 160), (Pedro, 75)
Cantidad de ventas que fueron por 100$ o menos: 1
Cantidad de ventas mayores a 100$: 
Monto total de las ventas: 520$*/

import CL_Vendedor from "./CL_Vendedor.js";
import CL_Ventas from "./CL_Ventas.js";

let vend1 = new CL_Vendedor("Mary",150);
let vend2 = new CL_Vendedor("José",135);
let vend3 = new CL_Vendedor("Carlos",160);
let vend4 = new CL_Vendedor("Pedro",75);

let vent = new CL_Ventas();
vent.procesarVendedor(vend1);
vent.procesarVendedor(vend2);
vent.procesarVendedor(vend3);
vent.procesarVendedor(vend4);

let salida = document.getElementById("salida")
salida.innerHTML = `VENTAS
<br>Cantidad de ventas que fueron por 100$ o menos: ${vent.Menor()} $
<br>Cantidad de ventas mayores a 100$: ${vent.Mayor()} $
<br>Monto total de las ventas: ${vent.MontoTotal()} $
`