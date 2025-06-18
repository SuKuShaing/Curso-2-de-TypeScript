// Any
let anyVar: any; // Casi es como desactivar TypeScript
anyVar = true;
anyVar = 12;
anyVar = "texto";
anyVar = {};
anyVar = null;
anyVar = undefined;

let isNew: boolean = anyVar;

anyVar.algo(); // todo permitido puesto que no hay análisis de tipos
anyVar.toUpperCase();



// Unknown
let unknownVar: unknown; // te obliga a verificar el tipo antes de usarlo
unknownVar = true;
unknownVar = 12;
unknownVar = "texto";
unknownVar = null;
unknownVar = undefined;
unknownVar = {};

// unknownVar.algo(); // Error, puesto que hay que verificar el tipo antes de usarlo
if (typeof unknownVar === "string") {
    unknownVar.toUpperCase();
}

if (typeof unknownVar === "boolean") { // me obliga a verificar el tipo antes de asignarlo
    let isNewV2: boolean = unknownVar;
}

const parse = (str: string): unknown => {
    return JSON.parse(str);
}