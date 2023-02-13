// import { shuffle } from 'underscore'; podríamos importar solo una función
// o importar todo el paquete como _ que es como lo teníamos
import _ from 'underscore';

// los importamos del archivo index.js del directorio usecases
import { crearNuevoDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML } from './usecases';
// import crearDeck from './usecases/crear-deck.js'; // debe estar declarada por defecto en su módulo:  export default crearDeck;

// con CTRL+ESPACIO muestra crearDeck la primera función a importar de crear-deck.js porque la hemos declarado con export

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');


// si miramos el intelligent nos indica que crearDeck recibe dos parámetros del tipo:  any    y devuelve uno de ese tipo:   any     Eso no nos ayuda mucho para depurar errores
deck = crearNuevoDeck(tipos, especiales);

// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta( deck );
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    const imgCarta = crearCartaHTML( carta );
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, deck, puntosHTML[1], divCartasComputadora );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, deck, puntosHTML[1], divCartasComputadora );
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador, deck, puntosHTML[1], divCartasComputadora );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearNuevoDeck(tipos, especiales);

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});

