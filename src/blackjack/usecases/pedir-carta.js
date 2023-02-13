
/**
 * Esta función me permite tomar una carta del montón
 * @param {Array<String>} deck ejemplo: ['4C','5D','6H']
 * @returns {String} retorna la carta del deck.  Ejemplo '4C'
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    console.log(deck);
    const carta = deck.pop();
    return carta;
}
