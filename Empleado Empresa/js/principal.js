/** EMPLEADOS EMPRESA
Una empresa conoce de sus empleados los siguientes datos: nombre, sexo ((M)asculino
(F)emenino). Se desea que realice un algoritmo que permite determinar e imprimir: Cantidad
de hombres que trabajan en la empresa y porcentaje de mujeres que trabajan en la empresa.
Se dispone de los siguientes datos de varios empleados: (nombre, sexo) (Mary, ‘F’),
(José, ‘M’), (Carlos, ‘M’), (Pedro, ‘M’)
Cantidad de hombres que trabajan en la empresa: 3
Porcentaje de mujeres que trabajan en la empresa: 25%*/
import CL_Empleados from "./CL_Empleados.js";
import CL_Empresa from "./CL_Empresa.js";

let emp1 = new CL_Empleados("Mary",'F');
let emp2 = new CL_Empleados("José",'M');
let emp3 = new CL_Empleados("Carlos",'M');
let emp4 = new CL_Empleados("Pedro",'M');

let em = new CL_Empresa();
em.procesarEmpleados(emp1);
em.procesarEmpleados(emp2);
em.procesarEmpleados(emp3);
em.procesarEmpleados(emp4);

let salida = document.getElementById("salida")
salida.innerHTML = `EMPLEADOS EMPRESA
<br> Cantidad de hombres que trabajan en la empresa: ${em.Masculino()}
<br> Porcentaje de mujeres que trabajan en la empresa: ${em.PorcF()} %
`