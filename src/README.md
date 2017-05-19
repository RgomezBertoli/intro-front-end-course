JavaScript
==========
JavaScript (JS) es el lenguaje por predilección para el desarrollo de aplicaciones web e híbridas. Antes de la aparicion de JS, las webs no tenían prácticamente interacción y se centraban en la muestra de datos e imágenes mostrando únicamente información estática. Tras la incorporación de JS las páginas ganaron interacción y dinamismo.

Y se hizo la magia.

![Magic Gif](../assets/magic.gif)

JS, al contrario de lo que mucha gente piensa, si que es un lenguaje tipado, pero en su caso, se trata de un tipado dinámico, es decir que cualquier variable que se declare puede cambiar de tipo sin tener que volver a declararla.

```javascript
var a = 123; // Number

a = 'Hola'; // Cadena de Caracteres (String)
```

## Tipos de Variables

En JS existen los siguientes tipos de variables:

 - Number
 - String
 - Null
 - Undefined
 - Boolean
 - Object

 Este último tipo es uno de los más importantes porque todo lo que es uno del resto de los tipos, se trata de un objeto. ¿Qué tipos de objetos existen?

 - Planos
 - Arrays
 - Funciones
 - Tipo Fecha
 - RegEx

Sí, aunque no lo creaís, en JS las funciones son de tipo Objeto, por lo tanto se comportan como cualquier otra variable, por lo que podemos asignarla a una variable y utilizarla como argumento de otra función.

```javascript
function sayHello(){    //Declaración de una función
    console.log('Hello');
}

sayHello();             //Ejecutamos la función

var salute = sayHello;  //Asignación de una función a una variable

salute()                //Ejecutamos la función a partir de la variable
                        // a la que le hemos asignado el valor

function otherThing(arg1){
    arg1();             //Ejecutamos la función que recibimos por parámetro
}

otherThing(sayHello);   //Pasamos nuestra función como argumento de otra función en su ejecución

var sayGoodbye = function (){   // Declaramos y asignamos una variable con una función como valor
    console.log('Goodbye');
}
```

Todos estos usos, son lo que podemos hacer con una función en JS, y además una cosa aun más loca:

```javascript
function tooCrazy() {
    return function (){...} //Una funcion que devuelve una funcion al ejecutarse
}
```

![Inception](http://www.reactiongifs.com/wp-content/uploads/2011/11/Recursive_shades.gif)

Te has quedao to picueto ehh!!

Volveremos más adelante con las peculiaridades de las funciones, pero ahora vamos con algo respecto a la creación y asignación de variables.

## Hoisting

Una peculiaridad de JS al respecto de la declaración y asignacion de una variable es el llamado **HOISTING**. El **hoisting** consiste en una recolocación de la declaración de las variables a la parte superior de la ejecución, separandola de su asignación. Un ejemplo, si tenemos el siguiente codigo:

```javascript
for(var i=0; i<10; i++){
    var aux = i + 5 /10;
}
 ```
JS lo que hará con ese código es lo siguiente:

```javascript
var i,aux;

for(i=0; i<10; i++){
    aux = i + 5/10;
}
```

Como se puede observar, ha subido a la parte superior de nuestro codigo la declaración de las variables que hemos creado y ha dejado la asignación de los valores en la posición en la que nosotros la habíamos hecho.

![Hoisting Gif](https://camo.githubusercontent.com/cb61648e936bd794eb84641d8d6908da60b17e6f/68747470733a2f2f7261772e6769746875622e636f6d2f666c6f76616e2f686f6973742f6d61737465722f64656d6f2f696d672f686f6973742e676966)

Con la creación de funciones hace algo bastante parecido, si tenemos el siguiente codigo:

```javascript
var a = foo;

function foo(){...};
```

JS lo interpreta de la siguiente manera:

```javascript
function foo(){...};

var a;

a = foo;
```
JS siempre sube las declaraciones de las funciones a la parte superior del código, a continuación, la de las variables, y luego ya el resto de sentencias.

Ahora que ya sabemos como funciona la creación y la asignación de variables, vamos a ver como podemos operar con ellas.

## Operadores

Como en todos los lenguajes existen todos los operadores matemáticos de adición, resta, multiplicación, división y resto, pero como ya os habreís dado cuenta, algunos tienen sus peculiaridades.

### **Adición o Suma**

```javascript
5 + 6 = 11      //Number + Number = Number

'5' + 6 = '56'  //String + Number = String

6 + '5' = 11    //Number + String = String

'Hola' + 'Adios' = 'HolaAdios' // String + String = String

6 + true = 7    //Number + Boolean = Number

false + 6 = 6   //Boolean + Number = Number

true + false = 1   //Boolean + Boolean = Number

[1,2] + 3 = '123'  //Array de Number + Number = String

3 + [1,2] = '123'  //Number + Array de Number = String

{id:1} + {id:2} = '[object Object][object Object]'  //Objeto + Objeto = String
```
Como podeis comprobar, este operador tiene muchos casos de uso. Lo que JS hace con este operador es transformar los operandos a un tipo básico que pueda sumar, por lo que los __*Boolean*__ los transforma a __*Number*__, y las estructuras de datos como los __*Objetos*__, JS lo que busca es transformarlo a __*String*__ mediante el método __*toString*__ que poseen todos los tipos derivados de los __*Objetos*__.

### **Sustracción o Resta**

En este caso, sólo se puede operar con tipos que pueden ser transformados al tipo __*Number*__, cómo ellos mismo, los __*Boolean*__ y los __*String*__, el resto de tipos darán NaN (Not a Number) al intentar esta operación con ellos:

```javascript
5 - 6 = -1

true - false = 0

5 - true = 4

'5' - 6 = -1

6 - '5' = -1

'hola' - 6 = NaN //Como 'hola' no se puede transformar a número 
                 //esta operación devuelve NaN (Not a Number)
```
Todo valor que no se pueda transformar de forma directa en un valor numérico hará que la operación devuelva el valor NaN.

### **Multiplicación y División**

Su funcionamiento es exactamente el mísmo que el visto en la Sustracción, si se intenta multiplicar o dividir un valor que no se puede transforma de forma directa en un número, el resultado de esta operación sera NaN, por lo que los casos de uso son los mismos que los anteriores pero cambiando el operador.

### **Operador Resto (%)**

El operador __*Resto*__ (%) nos devolverá el valor restante de una división, por ejemplo:

```javascript
6 % 4 = 2       //Esto se debe a que 6 = 4 * 1 + 2

6 % 3 = 0       //Viene de que 6 = 3 * 2 + 0
```

Al igual que con los tres operadores anteriores, sólo devuelve valor diferente a NaN cuando los valores con los que se opera pueden ser transformados a un valor numérico. Es un operador bastante útil para saber si un número es múltiplo de otro o para saber si es un número par o no:

```javascript
6 % 2 = 0       //Número Par

7 % 2 = 1       //Número Impar
```

## Operadores Lógicos

Permiten hacer comprobaciones de los valores de una variable, si es mayor o menor que otra, igual, distinta y si existe o no. En la mayoria de los casos devuelven un valor de tipo __*Boolean*__ pero tienen ciertas casos exclusivos que vereis a continuación:

```javascript
 6 >= 7     //false

 7 < 10     //true

 'hola' <= 'HOLA'   //false, esto se debe a que hace una comparación 
                    //del valor de la cadena en ASCII --> minusculas > MAYUSCULAS

1 == '1'    //true
1 === '1'   //false

1 != '1'    //false
1 !== '1'   //true
```

Como podeís comprobar, hay dos formas de hacer una comparación de igualdad, __*'=='*__ y __*'==='*__. La diferencia entre uno y otro es la resticción sobre que se comprueba.

 - __*'=='*__ comprueba unicamente si el valor es igual.

 - __*'==='*__ este comprueba tanto si el valor es el mismo como que los tipos tambien coincidan.

Dentro de los operadores lógicos estan el __*AND ('&&')*__ y el __*OR ('||')*__ que tienen un comportamiento bastante diferente al esperado por estos operadores.

```javascript
true && "1"     //"1"

'' && "1"       //""

false || {id:1}     //{id:1}

[] || 'hola'    //[]
```
Estos operadores lógicos son los únicos que no devuelven un valor __*Boolean*__, si no que devuelven un valor que depende de los valores que se están operando.

- En el caso de __*AND*__ se comprueba si el primer valor se puede transformar a un valor que sea igual a __*true*__, y si es así, se devuelve el valor correspondiente al segundo operando, si no, se devolverá el primer operando.

- En el caso del __*OR*__ es al contrario, si el primer operando se puede transformar a __*false*__, el valor devuelto será el del segundo operando, si no se devolverá el valor del primer operando.

Y, ¿cómo sabemos que valores son __*true*__ y cuales __*false*__? Pues aquí teneís la tabla de verdad que os dirá cuales son:

false | true
-----|-----
"" | Todo lo demás
0 |
false |
undefined |
null |

Una vez vistos los principales operadores, nos disponemos a ver las diferentes herramientas que nos da JS para programar la lógica de nuestra aplicación. Pero primero un descanso, que lo que viene ahora es duro.

![Rest Gift](https://media.tenor.co/images/4c2d7c1aca2c98cc9a1df35c35c2a129/tenor.gif)

## Herramientas Programáticas

Igual que el resto de lenguajes de programación tiene una serie de herramientas para permitirnos crear los flujos y la algoritmia de nuestra apliación.

## Estructuras de control

La más usada es 