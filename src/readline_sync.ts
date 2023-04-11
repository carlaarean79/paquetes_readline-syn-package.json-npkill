let saludar: string = "hola mundo";
console.log(saludar);
let readlineSync = require('readline-sync');//npm i --save-dev @types/node//instalar para que require no de error
let alturaPersona = readlineSync.question("indique la altura de la persona: ");
console.log(alturaPersona);
const base = readlineSync.question("indique la base: ");
const altura = readlineSync.question("indique la altura: ");
const resultado = base * altura;
console.log(resultado); 

//linea 4: se declara una variable a la que se asigna un nombre. En ella se va a guardar el paquete
//readline-Sync. require lo importa  
// linea 5: se declara una variable con el nombre alturaPersona donde se guarda la pregunta que le
//va a saltar al usuario. para ello se accede al objeto readlineSync.question y se escribe la pregunta
//este procedimiento es igual al del prompt donde el usuario puede ingresar datos por teclado
//question significa pregunta. Al igual que cuando creamos instancias y colocamos el punto,
//acá también se desplegan varias opciones que podemos implementar con esta biblioteca o paquete
//linea 6: se muestra lo que el usuario escribió
//linea 7 y 8: nuevas opciones para que el usuario ingrese valores
//linea 9: constante donde se define un calculo en relación a lo ingresado por el usuario
//linea 10: se muestra el resultado de ese calculo