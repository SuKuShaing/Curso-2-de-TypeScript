import { BaseModel } from "../base.model";

export enum ROLES { // Se recomienda usar en mayúsculas para los enums
	ADMIN = 'admin',
	SELLER = 'seller',
	CUSTOMER = 'customer',
}

export interface User extends BaseModel {
	username: string;
	role: ROLES;
}