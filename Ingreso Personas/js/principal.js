/**INGRESOS PERSONAS
Dado el nombre y el ingreso de varias personas. Determinar e imprimir: el monto del ingreso
menor y el ingreso promedio.
Se dispone de los siguientes datos de varias personas: (nombre, ingreso) (Mary, 150),
(José, 135), (Carlos, 160), (Pedro, 75)
Monto del ingreso menor: 75$
Ingreso promedio: 130$ */
import CL_Persona from "./CL_Persona.js";
import CL_Ingreso from "./CL_Ingreso.js";

let p1 = new CL_Persona("Mary",150);
let p2 = new CL_Persona("José",135);
let p3 = new CL_Persona("Carlos",160);
let p4 = new CL_Persona("Pedro",75);

let ing = new CL_Ingreso();
ing.procesarPersona(p1);
ing.procesarPersona(p2);
ing.procesarPersona(p3);
ing.procesarPersona(p4);

let salida = document.getElementById("salida")
 salida.innerHTML = `<br> INGRESOS
 <br> Monto del ingreso menor: ${ing.menorIng()} $
 <br> Ingreso promedio: ${ing.ingresoPromedio()} $ `