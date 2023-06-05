// Identifico la etiqueta main.
// Coloco el flexbox
let main = document.getElementsByTagName('main')[0];
main.classList.add('container');

// Coloco el numero de filas y columnas
let nFilas = 9;
let nColumnas = 9;

let div;
let objetivo = [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)];
let j1 = [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)];
let j2 = [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)];

// Creamos el inicio del tablero
document.addEventListener('load', inicio());

/**
 * Funcion que inicia el tablero (CON TODO LO NECESARIO)
 * @param {none}
 * @returns {none}
 */
function inicio() {
    let div;
    let objetivo = [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)];
    let j1 = [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)];
    let j2 = [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)];
    // Bucles para crear filas y columas
    for (let i = 0; i < nFilas; i++) {
        for (let j = 0; j < nColumnas; j++) {
            div = document.createElement('div');
            div.classList.add('card');
            div.setAttribute('id', `f${i}c${j}`);
            main.appendChild(div);

            if (i == objetivo[0] && j == objetivo[1]) {
                div.classList.add('objetivo');
            }
            if (i == j1[0] && j == j1[1]) {
                div.classList.add('j1');
            }
            if (i == j2[0] && j == j2[1]) {
                div.classList.add('j2');
            }

        }
    }
}


// Creamos el evento de escucha de tecaldo
document.addEventListener('keydown', mover);

/**
 * Funcion que detecta el movimiento y ejecuta el cambio de posicion
 * -    j1: mueve wasd
 * -    j2: mueve flechas
 * 
 * @param {Object} event - Informacion sobre el evento que se ha ejecutado 
 * @return {none} 
 */
function mover(event) {
    console.log(event['key']);
    /**
     * Identificamos con el objeto KeyboardEvent cual es la tecla que estoy pulsando.
     * -    key
     * -    code
     */
    let ahora, idAhora, despues, idDespues, fila, columna;
    switch (event['key']) {
        case 'w':
            // W. ¿Donde voy?
            /**
             * Wasd es para el j1
             * 1. Mirar donde esta j1 (clase) y recoger su id
             * 2. Con el id puedo saber en que fila y en que columna estoy.
             * 3. Sabiendo la tecla que pulso se que fila y a que columna tengo que moverme
             */
            ahora = document.getElementsByClassName('j1')[0];
            idAhora = ahora.getAttribute('id');
            // Al pulsar W tengo que moverme hacia arriba.
            // f_c_ ---> voy de f1c3 a f0c3
            fila = idAhora.charAt(1); // 1
            columna = idAhora.charAt(3);
            idDespues = `f${parseInt(fila) - 1}c${parseInt(columna)}`;
            despues = document.getElementById(idDespues);
            despues.classList.add('j1');
            ahora.classList.remove('j1');
            ganar()
            break;
        case 's':
            ahora = document.getElementsByClassName('j1')[0];
            idAhora = ahora.getAttribute('id');
            fila = idAhora.charAt(1);
            columna = idAhora.charAt(3);
            idDespues = `f${parseInt(fila) + 1}c${parseInt(columna)}`;
            despues = document.getElementById(idDespues);
            despues.classList.add('j1');
            ahora.classList.remove('j1');
            ganar()
            break;
        case 'a':
            ahora = document.getElementsByClassName('j1')[0];
            idAhora = ahora.getAttribute('id');
            fila = idAhora.charAt(1);
            columna = idAhora.charAt(3);
            idDespues = `f${parseInt(fila)}c${parseInt(columna) - 1}`;
            despues = document.getElementById(idDespues);
            despues.classList.add('j1');
            ahora.classList.remove('j1');
            ganar()
            break;
        case 'd':
            ahora = document.getElementsByClassName('j1')[0];
            idAhora = ahora.getAttribute('id');
            fila = idAhora.charAt(1);
            columna = idAhora.charAt(3);
            idDespues = `f${parseInt(fila)}c${parseInt(columna) + 1}`;
            despues = document.getElementById(idDespues);
            despues.classList.add('j1');
            ahora.classList.remove('j1');
            ganar()
            break;
        case 'ArrowUp':
            ahora = document.getElementsByClassName('j2')[0];
            idAhora = ahora.getAttribute('id');
            fila = idAhora.charAt(1);
            columna = idAhora.charAt(3);
            idDespues = `f${parseInt(fila) - 1}c${parseInt(columna)}`;
            despues = document.getElementById(idDespues);
            despues.classList.add('j2');
            ahora.classList.remove('j2');
            ganar()
            break;
        case 'ArrowRight':
            ahora = document.getElementsByClassName('j2')[0];

            idAhora = ahora.getAttribute('id');
            fila = idAhora.charAt(1);
            columna = idAhora.charAt(3);
            idDespues = `f${parseInt(fila)}c${parseInt(columna) + 1}`;
            console.log(idDespues)
            despues = document.getElementById(idDespues);
            despues.classList.add('j2');
            ahora.classList.remove('j2');
            ganar()
            break;
        case 'ArrowDown':
            ahora = document.getElementsByClassName('j2')[0];
            idAhora = ahora.getAttribute('id');
            fila = idAhora.charAt(1);
            columna = idAhora.charAt(3);
            idDespues = `f${parseInt(fila) + 1}c${parseInt(columna)}`;
            despues = document.getElementById(idDespues);
            despues.classList.add('j2');
            ahora.classList.remove('j2');
            ganar()
            break;
        case 'ArrowLeft':
            ahora = document.getElementsByClassName('j2')[0];
            idAhora = ahora.getAttribute('id');
            fila = idAhora.charAt(1);
            columna = idAhora.charAt(3);
            idDespues = `f${parseInt(fila)}c${parseInt(columna) - 1}`;
            despues = document.getElementById(idDespues);
            despues.classList.add('j2');
            ahora.classList.remove('j2');
            ganar()
            break;
        default:

            break;
    }
}


let contador1 = 0;
let contador2 = 0;
let victorias1 = 0;
let victorias2 = 0;


/**
 * Función que combrueba si hay ganador, si contiene la clase objetivo es que ha ganado
 * @param {none}  
 * @returns {none}
 */
function ganar() {

    j1 = document.getElementsByClassName('j1')[0];
    j2 = document.getElementsByClassName('j2')[0];

    if (j1.classList.contains('objetivo')) {
        victorias1++;
        actualizarContador();
        // Eliminar evento de teclado cuando hay un ganador.
        document.removeEventListener('keydown', mover);

    } else if (j2.classList.contains('objetivo')) {
        victorias2++;
        actualizarContador();
        // Eliminar evento de teclado cuando hay un ganador.
        document.removeEventListener('keydown', mover);
    }
}

/**
 * Función que actualiza los contadores de victorias
 * @param {none}  
 * @returns {none}
 */
function actualizarContador() {
    contador1 = document.getElementById('contador1');
    contador2 = document.getElementById('contador2');
    contador1.textContent = `J1:  ${victorias1}`;
    contador2.textContent = `J2:  ${victorias2}`;
}

/**
 * Función que reinicia el tablero y vuelve activar la posibilidad de mover las fichas
 * @param {none}  
 * @returns {none}
 */
function reiniciarPartida() {
    main.textContent = "";
    inicio()
    document.addEventListener('keydown', mover);;
}


function filtrar(){
    /**
     * PASOS.
     * 1. capturo el elemento
     * 2. recoger el valor
     * 3. Colocar display:none (ocultar) aquellos que no contengan el value
     */

    // 1
    let input =  document.getElementsByTagName('input')[0];

    // 2
    let valor = input.value;
    // console.log(input.value);

    // 3
    /**
     * ¿De que manera puedo comparar un contenido del input.value con el nombre de un pokemon?
     * 
     * Metodo includes con String que compara si una cadena esta contenida dentro de otra.
     * cadenaGrande.includes(cadenaPequeña) 
     * -    True si esta contenida
     * -    False si no esta contenida
     */

    /**
     * Para poder quedarme el nombre debo tener en cuenta lo siguiente:
     * -    Hay que coger todos los div que tengan class 'caja';
     * -    Dentro de estos div nos uqedamos con la primera etiqueta <p>
     * -    Dentro de esa etiqueta <p> debemos descartar 'nombre: ' y quedarnos solo con el nombre
     */

    let cajas = document.getElementsByClassName('caja'); // Array con todos los que tienen class caja
    // console.log(cajas.length)
    for (i in cajas) {
        // Me quedo con el contenido de la primera etiqueta p de cada caja
        let p = cajas[i].getElementsByTagName('p')[0];

        // Me quedo con el contenido de texto de la etiqueta p
        let textoP = p.textContent;

        // Me quedo con la subcadena que va desde los dos puntos (posicion 8)
        console.log(textoP.substring(8))

        let nombre = textoP.substring(8).toLowerCase();

        if(nombre.includes(valor)){
            console.log('esta contenido');
            // Como esta contenido, quiere decir que lo tengo que mostrar
            cajas[i].style.display = 'block';
        }else{
            console.log('no esta contenido');
            // Como no esta contenido, debo ocultarlo
            cajas[i].style.display = 'none';
        }
    }
}




/**
 * PENDIENTE:
 * 1. Mover casillas. si
 * 2. Que hago con los limites. si
 * 3. (colision entre dos jugadores. QUE HAGO). si, se sobreponen
 * 4. Que hago cuando gano. si, suma contador
 * 5. OBGLITAGORIO. Boton reinicio para ejecutar de nuevo la funcion inicio. si
 * 6. Contadores para puntuacion. si
 * 7. Eliminar evento de teclado cuando hay un ganador. si
 * 8. CSS BIEN. si
 * 9. OPCIONAL. Contador de tiempo antes de poder iniciar el juego(tablero pintado pero sin posibilidad de ejecutar eventos de teclado) no
 */