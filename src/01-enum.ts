enum ROLES { // Se recomienda usar en mayúsculas para los enums
	ADMIN = 'admin',
	SELLER = 'seller',
	CUSTOMER = 'customer',
}

type User = {
	username: string;
	role: ROLES;
};

const SebaUser: User = {
	username: 'seba',
	role: ROLES.SELLER,
};
