// Seba => [S, e, b, a] => string => string[] // se le pasa un string y devuelve un array de ese string
// [S, e, b, a] => Seba => string[] => string // se le pasa un array de strings y devuelve un string

function parseStr(input : string | string[]): string | string[] {
    if (Array.isArray(input)) {
        return input.join(""); // enviaron string, devuelvo cadena, [S, e, b, a] => Seba
    } else {
        return input.split(""); // enviaron cadena, devuelvo array, Seba => [S, e, b, a]
    }
}

const rtaArray = parseStr("Seba");
const rtaString = parseStr(["S", "e", "b", "a"]);

console.log("Envíe un string: seba =>", rtaString);
console.log("Envíe un array: [S, e, b, a] =>", rtaArray);

if (Array.isArray(rtaArray)) {
    rtaArray.reverse();
}

if (typeof rtaString === "string") {
    rtaString.toUpperCase();
}