// Ejercicio 1 

/* Creamos la función calcular salario mensual
e indicamos que utilice el valor del salario anual*/ 
function calcularSalarioMensual(salarioAnual)
{
  /* Tenemos que dividir el salario anual
  por los 12 meses del año para obtener el salario
  mensual
   */
  return salarioAnual / 12 
}

//Mostramos el resultado de la función en la consola 
console.log('Tu salario mensual es el siguiente: '+ calcularSalarioMensual(21600))

// Ejercicio 2

/* Creamos la función calcular salario anual, e indicamos que 
utilice el valor del salario mensual*/ 
function calcularSalarioAnual(salarioMensual)
{
  //Solo tenemos que multiplicar el salario mensual 
  //por los 12 meses del año y obtenemos el salario anual.
  return salarioMensual * 12
}


//Mostramos el resultado de la función en la consola 
console.log('Tu salario anual es el siguiente: '+ calcularSalarioAnual(1500))

// Ejercicio 3

/*Creamos la funcion calcular promedio e indicamos que utilice el  
valor de las 3 notas n1, n2, n3*/
function calcularPromedio(n1,n2,n3)
{
  //Como es un promedio sumamos todas las notas
  let sumaNotas = n1 + n2 + n3
  //Despues a esa suma la dividimos por la cantidad de notas
  let promedio = sumaNotas / 3 
  //devolvemos el promedio
  return promedio
}

//Ingresamos las 3 notas con prompt y encerramos al prompt con la función Number
//para que el dato sea ingresado de tipo numérico
//let notaExamen1 = Number(prompt('Ingresa la nota del 1er examen'))
//let notaExamen2 = Number(prompt('Ingresa la nota del 2do examen'))
//let notaExamen3 = Number(prompt('Ingresa la nota del 3er examen'))
//
////mostramos el promedio en una alerta, pasando el valor de las 3 notas cargadas por el prompt
//alert('El promedio de la materia es: '+ calcularPromedio(notaExamen1, notaExamen2, notaExamen3))