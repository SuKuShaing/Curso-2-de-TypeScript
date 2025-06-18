// Never
// Un función que nunca termina never end
const withoutEnd = (): never => {
    while (true) {
        console.log("Nunca pares de aprender");
    }
}

// o nunca llega a terminar, never end
const fail = (message: string): never => {
    throw new Error(message);
}

const example = (input: unknown): string | never => {
    if (typeof input === "string") {
        return `${input} es un string`;
    } else if (Array.isArray(input)) {
        return `${input} es un array`;
    }

    return fail("Not match");
}

console.log(example("hola"));
console.log(example([1, 2, 3]));
console.log(example(1212));  // se detiene aquí
console.log(example("Hola, después del fail"));
