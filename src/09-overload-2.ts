// La sobrecarga de funciones es recomendable usar cuando según la lógica de la función los tipos de la salida son diferentes

// Seba => [S, e, b, a] => string => string[] // se le pasa un string y devuelve un array de ese string
// [S, e, b, a] => Seba => string[] => string // se le pasa un array de strings y devuelve un string

export function parseStr(input: string): string[]; // tipamos la salida en función de la entrada, esto es la sobrecarga de funciones
export function parseStr(input: string[]): string; // Segundo caso de tipeo en el otro caso
export function parseStr(input: number): boolean; // tercer caso de tipeo en el otro caso

// export function parseStr(input : string | string[]): string | string[] {
//     if (Array.isArray(input)) {
//         return input.join(""); // enviaron string, devuelvo cadena, [S, e, b, a] => Seba
//     } else {
//         return input.split(""); // enviaron cadena, devuelvo array, Seba => [S, e, b, a]
//     }
// }

export function parseStr(input : unknown): unknown {
    if (Array.isArray(input)) {
        return input.join(""); // enviaron string, devuelvo cadena, [S, e, b, a] => Seba
    } else if (typeof input === "string") {
        return input.split(""); // enviaron cadena, devuelvo array, Seba => [S, e, b, a]
    } else if (typeof input === "number") {
        return true;
    }
}

const rtaArray = parseStr("Seba");
const rtaString = parseStr(["S", "e", "b", "a"]);
const rtaNumber = parseStr(123);

console.log("Envíe un string: seba =>", rtaString);
console.log("Envíe un array: [S, e, b, a] =>", rtaArray);
console.log("Envíe un número: 123 =>", rtaNumber);

const reverse = rtaArray.reverse();  // antes de sobrecargar la función se debían hacer las validaciones
const upper = rtaString.toUpperCase();

console.log("rrtaArray.reverse(): ", reverse)
console.log("rrtaString.toUpperCase(): ", upper)

if (Array.isArray(rtaArray)) { // ahora ya no son necesarias las validaciones puesto que se sobrecargo la función
    rtaArray.reverse();
}

if (typeof rtaString === "string") { // ahora ya no son necesarias las validaciones puesto que se sobrecargo la función
    rtaString.toUpperCase();
}
