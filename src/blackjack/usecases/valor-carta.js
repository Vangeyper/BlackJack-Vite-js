
/**
 * Obtiene el valor numérico de la carta indicada
 * @param { String } carta  Ejemplo:  '4C'
 * @returns { Number } retorna el valor numérico de la carta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}