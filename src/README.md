JavaScript
==========
JavaScript (JS) es el lenguaje predeterminado para el desarrollo de aplicaciones web e híbridas. Antes de la aparicion de JS, las webs no tenían prácticamente interacción y se centraban en la muestra de datos e imágenes mostrando únicamente información estática. Tras la incorporación de JS las páginas ganaron interacción y dinamismo.

Y se hizo la magia.

![Magic Gif](../assets/magic.gif)

JS, al contrario de lo que mucha gente piensa, si que es un lenguaje tipado, pero en su caso, se trata de un tipado dinámico, es decir que cualquier variable que se declare puede cambiar de tipo sin tener que volver a declararla.

```javascript
var a = 123; // Number

a = 'Hola'; // Cadena de Caracteres (String)
```

# Tipos de Variables

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

var sayGoodbye = function (){   //Declaramos y asignamos una variable con una función como valor
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

<hr>

### __*Hoisting*__

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

![Hoisting Gif](https://camo.githubusercontent.com/cb61648e936bd794eb84641d8d6908da60b17e6f/68747470733a2f2f7261772e6769746875622e636f6d2f666c6f76616e2f686f6973742f6d61737465722f64656d6f2f696d672f686f6973742e676966)

<hr>

Ahora que ya sabemos como funciona la creación y la asignación de variables, vamos a ver como podemos operar con ellas.

# Operadores

Como en todos los lenguajes existen todos los operadores matemáticos de adición, resta, multiplicación, división y resto, pero como ya os habreís dado cuenta, algunos tienen sus peculiaridades.

## **Adición o Suma**

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

## **Sustracción o Resta**

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

## **Multiplicación y División**

Su funcionamiento es exactamente el mísmo que el visto en la Sustracción, si se intenta multiplicar o dividir un valor que no se puede transforma de forma directa en un número, el resultado de esta operación sera NaN, por lo que los casos de uso son los mismos que los anteriores pero cambiando el operador.

## **Operador Resto (%)**

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

## **Operadores Lógicos**

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

# Estructuras de Control y Flujo

Igual que el resto de lenguajes de programación tiene una serie de estructuras para permitirnos crear los flujos y la algoritmia de nuestra apliación.

## Condicionales

Se encargan de que una parte de nuestro código se ejecute si se cumple una condición o si ocurre un sucesso que estemos controlando a partr de una de estas estructuras.

### __*if...else*__

La más usada es la estructura correspondiente al __*if...else*__, con la cual dependiendo de si la condición a evaluar es correcta o no, se ejecuta un bloque de código o no. Por ejemplo:

```javascript
if(condicion){              //Si "condicion" se puede transformar a true
    doSomething();          //se ejecutará doSomething, si no pasará de ello
}

if(condicion2){             //Si "condición2" es true, se ejecutará otherStuff,
    otherStuff();           //si no, se ejecutará anotherStuff
} else {
    anotherStuff();
}

if (condition3){            //Si "condition3" es true, se ejcutará something, 
    something();            //y si "condition3" es false y "condition4" es true
} else if(condition4){      //se ejecutará lastThing
    lastThing();
}
```

Las condiciones que se ponen dentro de los __*if*__ pueden ser una serie de condiciones concatenadas a partir de los operadores lógicos que vimos anteriormente, y el resultado de tal serie se evaluará con la __*tabla de verdad*__ que encontramos en el apartado anterior.

### __*switch*__

Con esta estructura podemos hacer que se ejecute un bloque de codigo si el valor de la variable que le pasamos es igual a uno de los casos que definamos. Por ejemplo:

 ```javascript
 switch(valor1){
     case 'a':              //Si valor1 == 'a' ejecutará doSomething y
        doSomething();      //saldrá del switch porque tiene un 'break' al final
        break;
    case 'b':
    case 'c':               //Si valor1 == 'b' || valor1 == 'c', se ejecutará
        doSomething2();     //doSomething2 y se saldrá
        break;
    case 'd':               //Si valor1 == 'd' se ejecutará doSomething3
        doSomething3();     //y doSomething4 porque no hay un break entre caso
    case 'e':               //y caso, pero si valor1 == 'e', solo ejecutará
        doSomething4();     //doSomething4 y se saldrá
        break;
    default:                //Este caso se ejecutará siempre que valor1 no sea
        finish();           //igual a ninguno de los caso por defecto
        break;
 }
 ```

 Como se puede observar en el ejemplo, todos esos son los casos de uso de esta estructura de control. El __*switch*__ irá ejecutando los casos de forma consecutiva desde el primer caso que sea __*true*__ y parará en el momento en el que se encuentre un __*break*__ en alguno de los casos por los que pase.

 <hr>

 ### Sentencia __*Break*__

 Esta sentencia sirve para romper un ciclo de ejecución, es decir si estamos en una estructura de control y llega un momento en el que se llega a ejecutar una sentencia __*break*__, automáticamente se saldrá de la estructura de control.

 Es muy util para los casos en el que estamos dentro de un bucle y queremos que se pare ese bucle cuando se cumpla una condición.

 ```javascript
 for(var i=0; i<10; i++){
     if(i === 7){           //Cuando i sea igual a 7, se ejecutará el break
         break;             //y se saldrá del bucle
     }
 }
 ```
 <hr>

### __*try...catch...finally*__

El principal uso de esta estructura es el de controlar los errores que puedan surgir en nuestro código y evitar que estos acaben causando una parada en la ejecución de nuestro bloque de código.

```javascript
try {
    doSomething();      //Si en la ejecución de doSomething ocurre un error automáticamente
} catch (error){        //se ejecutará el bloque del catch que recibirá como parámetro
    console.log(error); //ese error.
} finally {             //El finally indica un bloque de código que siempre se va a ejecutar
    clear();            //haya habido un error o no
}
```

En JS no es my recomendable el uso de esta estructura porque tiene un gran impacto en términos de rendimiento, por lo que suele encontrarse únicamente en zonas del código muy sensibles a errorres que no pueden ser controlados, fallos en peticiones a servidor debidos a problemas de red, errores causados por problemas con la falta de memoria, etc...

## Iteradores

Hay diferentes estructuras de iteradores pero todas funcionan de la misma manera. Los iteradores repetirán el bloque de código que encierran mientras se cumpla la condición que le pongamos.

### __*for*__

La estructura de este iterador es la siguiente:

```javascript
for(var i=0; i<10; i++){
    //Sentencias que se quieren ejecutar en cada iteración
}
```

En la primera parte se declara la variable y el valor de inicio de la iteración, a continuacion la condición que se comprobará en cada iteracíon, y que de ser __*true*__ se seguirá con la iteración y en cuanto sea __*false*__ se romperá el ciclo, y la ultima parte que indica el incremento de la variable indicada en cada iteración.

La estructura __*for*__ tiene dos variantes:

- __*for..in*__: En cada iteración devuelve los indices del objeto o array que se esta recorriendo.

```javascript
var obj = {
    id: 1,
    content: 'hola',
    subContent: 'que tal?'
};

for(var key in obj){
    console.log(key);
}

//Resultado:
//> id
//> content
//> subContent
```

- __*for...of*__: Este recorre los valores de cada posición en cada iteracíon:

```javascript
var obj = {
    id: 1,
    content: 'hola',
    subContent: 'que tal?'
};

for(var value of obj){
    console.log(value);
}

//Resultado:
//> 1
//> 'hola'
//> 'que tal?'
```

Ambas variantes detendran su iteración en el momento en el que no haya mas posiciones que recorrer del objeto o array que se utiliza en la iteración.

### __*while y do...while*__

Esta estructura de iteración tiene una sintaxis más sencilla que la anterior:

```javascript
while (condition){
    //codigo a ejecutar en cada iteración
}

do {
    //codigo a ejecutar en cada iteración
} while (condition)
```

En este caso solo hay que declarar la condición que se comprobará en cada iteración y en el caso de que esa condición sea __*false*__ se saldrá del bucle.

La diferencia entre __*while*__ y __*do...while*__ es que en el primer caso se hara una evaluación previa de la condición y si esta es __*false*__ el código no se ejecutará, si embargo, en el segundo caso, el código se ejecutará antes de evaluar la condición, por lo que al menos se ejecutará una vez en el caso de la condición sea __*false*__.

Ahora que hemos repasado un poco las ideas iniciales de programacíon y visto las partes más básicas de JS, vamos a por las peculiaridades:

![Ready Gif](https://orig00.deviantart.net/c225/f/2012/010/f/d/are_you_ready_for_the___hurricane___gif_by_abunchofzombies-d4lz74l.gif)

## __*Funciones*__

Cómo ya os he mencionado antes, las funciones son de lo más raro que tiene JS, porque directamente no existe un tipo exclusivo para ellas como en el resto de lenguajes, si no que son un subtipo de los __*Objectos*__, lo que nos permite asignar las funciones a una variable, pasarlas como parámetro a otra función o incluso devolverlas como resultado de una función, cómo ya vimos anteriormente.

Pero además de esto, las funciones tienen una característica que las diferencia del resto de elementos de JS:

## __*SON LO ÚNICO EN JS QUE CREA UN NUEVO ÁMBITO*__

Grabaros esta frase a fuego porque es de las cosas más **importantes** al respecto de las __*funciones*__. Y, ¿qué es lo que quiere decir esta frase? Significa que todo lo que se cree o declare dentro de la __*función*__ sólo existirá dentro de ella, si intentamos acceder desde otro punto que se encuentre fuera de las llaves que encierran la __*función*__ nos dará un error.

```javascript
function doSomething(){
    var aux = 'Estoy dentro de la función';
}

console.log(aux);   //Esta sentencia dara un error de que la variable no está definida
```

Al disfrutar de su ámbito totalmente aislado respecto al resto del código, nos permite encerrar todo tipo de código, que todo el espacio en memoria que este genera se borrará al acabar la ejecución de la función. Hay que tener en cuenta que como sucedía en otros casos, también existe el __*hoisting*__ dentro de ese ámbito de la función, por lo que la declaración de las funciones y de las variables que se hagan dentro de la función también se colocarán en la parte superior de esta.

```javascript
function ambito(){
    var a = 'hoisting';

    function foo(){...};
}

//Esto se convertirá en:

function ambito(){
    function foo(){...};
    var a;

    a = 'hoisting'
}
```

Desde una función se puede acceder al ámbito del padre, pero el padre no puede acceder al ámbito del hijo. Por ejemplo:

```javascript
function vader(){
    var darth = 'Luke, Yo soy tu padre';

    function luke(){
        var son = 'NOOOOOOOOO!!';

        console.log(darth);     //No da error, mostrará 'Luke, Yo soy tu padre'
    }

    console.log(son);           //Devolverá un error de variable no definida
}
```

Algo a tener en cuenta en JS es que todas las funciones devuelven siempre un valor hayamos puesto una sentencia __*return*__ o no en nuestra función, porque JS lo que hará al no ver esa sentencia será lo siguiente:

```javascript
function noDevuelvoNada(){
    /*
        Muchos calculos muy chulos...
    */
}

//A lo que JS entiende

function noDevuelvoNada(){
    /*
        Muchos calculos muy chulos...
    */

    return;         //JS añade la sentencia "return;" haciendo quela funcion devuelva undefined 
}
```

<hr>

### Sentencia __*return*__

Esta sentencia sólo existe dentro del ámbito de una función, fuera de él causaría un error. Se utiliza para que la función en cuestion devuelva un valor al ejecutarse y además es la última sentencia que se ejecuta, es decir, si ponemos código despues de llamar a esta sentencia, ese código no se ejecutará nunca:

```javascript
function additionOfThree(add1, add2, add3){

    if(!add1 || !add2 || !add3){    //Si cualquiera de los parámetros es nulo, se ejecutará la
        return 0;                   //sentencia return cortando la ejecución del código
    }

    return add1 + add2 + add3;      //Si no, se devolvera el valor de la suma
}
```

En el caso de que se ponga un __*return*__ dentro de una estructura de iteración, no sólo sale del bucle de ejecución, si no que también acabará con la ejecución de la función.

```javascript
function cuentaHasta10(){
    for(var i=0; i<20; i++){
        if(i===10){
            return;         //En cuanto i sea 10 se ejecutará el return y se saldrá de la función
        }
        console.log(i + 1);
    }
}
```

<hr>

Ahora hablaremos de como manipular nuestro __*HTML*__ desde nuestro JS.

# DOM (Document Object Model)

En JS existe un objecto que contiene una serie de funciones que nos permiten obtener, editar, crear y eliminar elementos HTML. Se trata de objeto __*document*__. Contiene una gran cantidad de metodos, pero nos centraremos en los más importantes:

## getElementById, getElementsByClass y querySelector

Estos tres métodos nos permiten obtener los elementos del HTML. Si tenemos el siguiente HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        /* Varios estilos css */
    </style>
    <title>Introduction Course</title>
</head>
<body>
    <header class="header">
        <!-- Elementos de un Header -->
    </header>
    <main class="content">
        <p>Put your credentials below</p>
        <form class="login-form">
            <input id="login" type="text" class="input-user" placeholder="Username">
            <input type="password" class="input-pass" placeholder="Password">
            <button class="submit-button">Sign In</button>
        </form>
    </main>
    <footer class="stick-bottom">
       <!-- Elementos de un Footer -->
    </footer>
</body>
</html>
```

Ahora cojamos el elemento en el que un usuario pondría su Login a partir de las tres

```javascript
var input1 = document.getElementById('login');

var input2 = document.getElementsByClass('input-user');
//En este caso se devuelve un array con todos los elementos que tienen esa clase

var input3 = document.querySelector('form.login-form input.input-user');
//Este devuelve únicamente el elemento que cumple ese selector
```

Debido a que no es recomendable asignar IDs a los elementos HTML, el primer método no suele usarse mucho. El segundo, al devolver un array de elementos, puede que nos cueste encontrar nuestro elemento si hay varios con la misma clase. El último es el más útil debido a que nos permite buscar un elemento a partir de un selector CSS, por lo que la busqueda es mucho más precisa.

## addEventListener y removeEventListener

Nos permiten asignar y eliminar un evento que tengamos asociado a un elemento HTML en concreto, como podría ser un evento de 'onClick' o para saber que se ha cargado la página.

Si tenemos el anterior HTML, vamos a ponerle un evento al botón del formulario:

```javascript
//Como tenemos que esperar a que los elementos esten cargados en la pantalla
//siempre es recomendable esperar a que el documento esté cargado para evitar
//errores

document.addEventListener('load', function(){
    //Cogemos el elemento
    var button = document.querySelector('login-form button.submit-button');

    //Y le asignamos la funcion a ejecutar cuando se lance el evento
    button.addEventListener('click', function(){
        //Codigo para loguearse
    });
});
```

Para eliminar un evento tenemos que hacer el mismo proceso, coger el elemento y seleccionar el evento al que queremos desubscribirnos.

## createAttribute, createElement, createTextNode y appendChild

A partir de estos 4 métodos podemos crear y editar los elementos que seleccionemos a partir de los métodos anteriores. Manteniendo el mismo HTML vamos a crear un elemento y lo vamos a incluir en nuestro __*main*__:

```javascript
var main = document.querySelector('main.content');

//Creamos el elemento
var p = document.createElement('p');
//Le asginamos una clase
p.createAttribute('class', 'main-text');
//Damos un texto que se mostrará en el elemento
p.createTextNode('ESTE ES EL TEXTO');
//Incorporamos nuestro elemento nuevo al final de la etiqueta "main"
main.appendChild(p);
```
Este código generará el siguiente HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        /* Varios estilos css */
    </style>
    <title>Introduction Course</title>
</head>
<body>
    <header class="header">
        <!-- Elementos de un Header -->
    </header>
    <main class="content">
        <!-- Resto de los elementos del main-->
        <p class="main-text">ESTE ES EL TEXTO</p>
    </main>
    <footer class="stick-bottom">
       <!-- Elementos de un Footer -->
    </footer>
</body>
</html>
```

## removeChild

Con este método podemos eliminar un elemento del DOM, pero es necesario coger el padre ese elemento y el propio elemnto.

Vamos a eliminar ese elemento que antes hemos creado e incluido:

```javascript
//Cogemos a su padre
var main = document.querySelector('main.content');
//Obtenemos el elemento a eliminar
var p = main.querySelector('p.main-text');
//Y lo eliminamos
main.removeChild(p);
```

Bueno, ahora que ya sabemos manipular vamos a aprender como hacer una llamada asíncrona para pedir información a un servidor.

# AJAX (Asynchronous Javascript And XML)

Para esta tarea, JS tiene el objeto XMLHttpRequest, el cual tiene los métodos necesarios para crear nuestra petición, enviarla y recibirla:

```javascript
function createRequest(){
    var data = 'datos a enviar';

    var xhr = new HMLHttpRequest();

    xkr.open('metodo', 'url al servidor', true);
    xhr.setRequestHeader('nombre del header', 'valor');
    xhr.onreadystatechange = onResponse;

    xhr.send(data);
    
    function onResponse(){
        if(xhr.readyState === xhr.DONE && xhr.status === 200){
            var response = xhr.responseText;

            /*
            Hacemos lo que sea con la respuesta
            */
        }
    }
}
```

En este código realizamos los siguientes pasos:

- Creamos un nuevo objeto con la sentencia __*new*__.
- Abrimos una petición indicandole el método HTTP a usar, la URL y si debe ser asíncrona con el método __*open*__.
- Incluimos las cabeceras de la petición a través de la función __*setRequestHeader*__.
- Indicamos el método que se debe ejecutar cada vez que la petición cambie de estado igualando la propiedad __*onreadystatechange*__ a nuestro método.
- Enviamos nuestra petición a partir del método __*send*__, pasándole como parámetro los datos que se quieren enviar al servidor.

Por otro lado, cuando se llama a nuestra función realizamos las siguientes acciones:

- Comprobamos que el estado de la petición es que se ha terminado y que la respuesta a sido correcta comprobando las propiedades __*readyState*__ y __*status*__ de nuestro objeto __*xhr*__.
- Si es correcta, recogemos la respuesta a partir del atributo __*responseText*__.

Y siguiendo estos pasos, conseguimos realizar de forma exitosa una llamada a un servidor de forma asíncrona y sin penalizar en el rendimiento de nuestra página.

<hr>

### Sentencia __*new*__

A partir de esta sentencia podemos crear nuevos objetos personalizados, pero estos objetos han de ser objetos del tipo función, como el siguiente:

```javascript
//Le pasamos los valores de los atributos de los que queremos guardar el valor
function Persona(age, name){
    //A partir del "this" podemos asignar un atributo a este objeto función
    this.age = age;
    this.name = name;

    //Y ademas de atributos, podemos asignarle funciones a este objeto función
    this.sayHello(){
        alert('HEEELLLLOOO');
    }
}

//Con la sentencia "new" creamos una nueva instancia con los valores que le pasamos
var pepe = new Persona(40, 'Pepe');

console.log(pepe.name);     //Devuelve el valor del atributo > 'Pepe'

pepe.sayHello();            //Ejecuta el método que hemos declarado anteriormente.
```

Al declarar una __*funcion*__ con atributos y funciones y añadiendolas al objeto __*this*__ de la función, el cual se refiere al propio ámbito de la función, creamos lo más parecido que existe a una __*clase*__ en JS, con sus atributos y sus métodos.

A partir de la sentencia __*new*__ podemos crear instancias de este __*objeto*__ y luego utilizar sus atributos y sus métodos como podeis ver en el ejemplo.

<hr>

Y con todo esto ya teneis los conocimientos necesarios para crear cualquier tipo de algoritmia de vuesta página web. Ahora es el momento de ver el mundo arder.

![Fire Programmer](https://media.giphy.com/media/dbtDDSvWErdf2/giphy.gif)
