/**TRABAJADORES EMPRESA
Se conoce de cada uno de los trabajadores de una empresa su nombre, número de horas
trabajadas en tiempo regular y número de horas extra. La hora en tiempo regular se paga a
 10$. y la hora en tiempo extra se paga a 25$. Se desea que el programa genere el nombre y
salario obtenido de cada trabajador; además se requiere el monto total de nómina pagada.
Se dispone de los siguientes datos de varios trabajadores: (nombre, número de horas
regular, números de horas extra) (Mary, 30, 10), (José, 35,5), (Carlos, 35,0), (Pedro, 25, 10)
El trabajador Mary tiene un salario de: 550$
El trabajador José tiene un salario de: 475$
El trabajador Carlos tiene un salario de: 350$
El trabajador Pedro tiene un salario de: 500$
Monto total de nómina pagada: 1875$*/

import CL_Empresa from "./CL_Empresa.js";
import CL_Trabajador from "./CL_Trabajador.js";

let trab1 = new CL_Trabajador ("Mary", 30, 10);
let trab2 = new CL_Trabajador ("Mary", 35, 5);
let trab3 = new CL_Trabajador ("Mary", 35, 0);
let trab4 = new CL_Trabajador ("Mary", 25, 10);

let emp = new CL_Empresa();
    emp.procesarTrabajador(trab1);
    emp.procesarTrabajador(trab2);
    emp.procesarTrabajador(trab3);
    emp.procesarTrabajador(trab4);

let salida = document.getElementById("salida");
salida.innerHTML= `
Salarios
<br> El trabajador ${trab1.nombre} tiene un salario de: ${trab1.salario()} $
<br> El trabajador ${trab2.nombre} tiene un salario de:${trab2.salario()}  $
<br> El trabajador ${trab3.nombre}Carlos tiene un salario de: ${trab3.salario()} $
<br> El trabajador${trab4.nombre} Pedro tiene un salario de: ${trab4.salario()} $
<br> Monto total de nómina pagada: ${emp.MontoTotal()} $
`    
