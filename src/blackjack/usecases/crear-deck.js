
import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * la indicamos como exportable para poder importarla en otros módulos
 * @param {Array<String>} tiposDeCarta    Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} regresa un nuevo deck de cartas
 */
export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {

    // validaciones
    if ( !tiposDeCarta ) throw new Error('tiposDeCarta es obligatorio')
    if ( tiposDeCarta.length <= 0 ) throw new Error('tiposDeCarta no puede estar vacío')
    if ( !tiposEspeciales ) throw new Error('tiposEspeciales es obligatorio')
    if ( tiposEspeciales.length <= 0 ) throw new Error('tiposEspeciales no puede estar vacío')

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

// si queremos exportar por defecto una función para este módulo lo hacemos así:
// export default crearDeck;