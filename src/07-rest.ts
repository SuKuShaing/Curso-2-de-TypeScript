import { User, ROLES } from "./01-enum";

const currentUser: User = {
    username: "seba",
    role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {  // la función solo verifica si el usuario es admin
    if (currentUser.role === ROLES.ADMIN) {
        return true;
    }
    return false;
}

console.log(`el usuario ${currentUser.username} tiene el rol de ${currentUser.role}`);
console.log("checkAdminRole()", checkAdminRole());

export const checkRole = (role1: string, role2: string) => {  // la función verifica si el usuario es admin o seller, es fija
    if (currentUser.role === role1) {
        return true;
    }
    if (currentUser.role === role2) {
        return true;
    }
    return false;
}

console.log("checkRole()", checkRole(ROLES.ADMIN, ROLES.SELLER));


export const checkRoleV2 = (roles: string[]) => {  // el roles es un array de strings y debe ser enviado como un array de argumentos
    if (roles.includes(currentUser.role)) {
        return true;
    }
    return false;
}

console.log("checkRoleV2()", checkRoleV2([ROLES.ADMIN, ROLES.SELLER]));


export const checkRoleV3 = (...roles: string[]) => {  // el ...roles es un parámetro rest que agrupa todos los argumentos en un array
    if (roles.includes(currentUser.role)) {
        return true;
    }
    return false;
}

console.log("checkRoleV3()", checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER));