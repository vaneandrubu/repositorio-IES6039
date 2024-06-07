// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x > y) { return x;
    
  } else {if (x < y) { return y;
    
  } else { return x; 
    
  }
    
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  var Permiso
  if (edad >= 18) { Permiso = 'Allowed';
    
  } else { Permiso = 'Not allowed';
    
  }
  return Permiso;
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.

  var mensaje;

  if (status === 1) { mensaje = 'Online';
    
  } else { if (status === 2) { mensaje = 'Away';
    
          } else { mensaje = 'Offline';
    
                  }
    
  }
  return mensaje;
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:

  var mensaje;

  switch (idioma) {
    case 'aleman':
      mensaje = 'Guten Tag!';
      break;
    
    case 'mandarin':
      mensaje = 'Ni Hao!';
      break;
    
    case 'ingles':
      mensaje = 'Hello!';
      break;
  
    default:
      mensaje = 'Hola!';
      break;
  }
  return mensaje;

}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.

  var mensaje;

  switch (color) {
    case 'blue':
      mensaje = 'This is blue';
      break;
    
    case 'red':
      mensaje = 'This is red';
      break;
    
    case 'green':
      mensaje = 'This is green';
      break;

    case 'orange':
      mensaje = 'This is orange';
      break;
        
    default:
      mensaje = 'Color not found';
      break;
  }
  return mensaje;


}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero === 10 || numero === 5) { return true;
    
  } else { return false;
    
  } 
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:

  if (numero > 20 && numero < 50) { return true;
    
  } else { return false;
    
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  var redondeo
  redondeo = Math.floor(numero);
  var resta
  resta = numero - redondeo

  if (resta === 0) { return true;
    
                   } else { return false;
    
                          }
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var mensajefin
  var resto3;
  var mensaje3 = " ";
  resto3 = numero % 3;
  if (resto3 === 0) { mensaje3 = "fizz"; 
                    }
  var resto5;
  var mensaje5 = " ";
  resto5 = numero % 5;
  if (resto5 === 0) { mensaje5 = "buzz";
                    }
  
  if (resto3 === 0 && resto5 === 0) { 
   mensajefin = mensaje3 + mensaje5;} 
  else { 
    if (resto3 === 0) {
        mensajefin = mensaje3;
                      } 
    else { 
      if (resto5 === 0) { mensajefin = mensaje5;
                        } 
      else { mensajefin = numero;

           }            
         }
    
       }
  return mensajefin;
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  
  var bandera;
  bandera = false;
  var mensajefin = ""

  if (num1 > num2 && num1 > num3 && num1 > 0 ) {bandera = true; mensajefin = "Número 1 es mayor y positivo"; 
                                               } 
  
  if ((num1 < 0 || num2 < 0 ) || num3 < 0) {bandera = true; mensajefin = "Hay negativos"; 
                                             }
  
                                             
  if (num3 > num1 && num3 > num2 ) { num3 = num3 + 1; bandera = true; mensajefin = num3; 
                                   }
  
  if (num1 === 0 || num2 === 0 || num3 === 0 ) { bandera = true; mensajefin =  "Error"; 
                                               }
  if (!bandera) { return false;
                }
  else { return mensajefin;
       }
  
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

 
  var resto; 
  var acum = 0;
  var bandera = false;
  var ultimo = false;
  if (numero === 0 || numero === 1) {return false;}

  for (let i = 2; i < numero; i++) { resto = numero % i;if (resto === 0) 
                                                            { bandera=true;}             
                                      }

 if (bandera) { return false;} else { return true;}
    
 
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  var mensaje=" "

  if (valor === true) { mensaje = "Soy verdadero";
    
                       } else { mensaje = "Soy falso";
    
                               }
 return mensaje;                              

}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  Resulta = [0];
  
  for (let index = 1; index < 11; index++) { n = Resulta.push(index);}

  for (let index = 0; index <= 10; index++) {Resulta[index] = Resulta[index]*6 ; }

  return Resulta;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
 if (numero >= 100 && numero <= 999) {return true; } else {return false;}
  
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var i=1;
  do {numero=numero+5;i=i+1;} while (i<=8);
  return numero;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
