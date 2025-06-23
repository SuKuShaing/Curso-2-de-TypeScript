export enum ROLES { // Se recomienda usar en mayúsculas para los enums
	ADMIN = 'admin',
	SELLER = 'seller',
	CUSTOMER = 'customer',
}

export interface User {
	id: string | number;
	username: string;
	role: ROLES;
}