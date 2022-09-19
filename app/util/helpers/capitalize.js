// Funcion que recibe como argumento un string y retorna el string con la primer letra UpperCase.

export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };