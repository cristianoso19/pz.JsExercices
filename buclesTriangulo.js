/*En este desafío, debes dibujar un triángulo isósceles usando bucles.
Recibirás dos parámetros: size y character, que definen el tamaño y el carácter con el que se debe construir el triángulo, respectivamente. Además, el triángulo debe estar alineado a la derecha, lo que significa que la columna más derecha del triángulo debe estar en el borde derecho de la consola.
Recuerda que para hacer el salto de línea debes usar "\n", no olvides removerla de la última parte.
Tendrás inputs y outputs como los siguientes 👇

Ejemplo 1:
Input: printTriangle(5, "*")
Output:
    *
   **
  ***
 ****
*****

Ejemplo 2:
Input: printTriangle(6, "$")
Output:
     $
    $$
   $$$
  $$$$
 $$$$$
$$$$$$ */

function printTriangle(size, character) {
    // Tu código aquí 👈
    for (let i = 1; i <= size; i++) {
        let response = "";
        for (let empty = size - i; empty > 0; empty--) {
            response += " ";
        }
        for (let filled = 1 ; filled <= i; filled++ ){
            response += character
        }
        console.log(response);
    }
}

printTriangle (5,"*");
