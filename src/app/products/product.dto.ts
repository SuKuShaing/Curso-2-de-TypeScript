import { Product } from "./product.model";

// DTO: Data Transfer Object
// omit (omitir) es para excluir ciertos campos, puesto que la base de datos los añadirá
// type createProductDto = Omit<Product, "id" | "createdAt" | "updatedAt" | "category">;

export interface createProductDto extends Omit<Product, "id" | "createdAt" | "updatedAt" | "category"> {
    categoryId: string;
}

// pick (elige) es para seleccionar solo ciertos campos
type example = Pick<Product, "title" | "description">;

// Partial es para que todos los campos sean opcionales
// export interface UpdateProductoDto extends Partial<Product> {}; // sí fuese así, se podrían cambiar el id, createdAt y otros campas que deben ser readonly
export interface UpdateProductoDto extends Partial<createProductDto> {}; // de esta manera ya están omitidos esos campos

// Required es para que todos los campos sean obligatorios
type UpdateProductoDto2 = Required<Product>;

// Readonly es para que todos los campos sean readonly
type example3 = Readonly<Product>;

export interface FindProductoDto extends Readonly<Partial<Omit<Product, "tags">>> {
	readonly tags: ReadonlyArray<string>;
    // ReadonlyArray es para que no se pueda modificar ni mutar el array
    // readonly es para no poder cambiar por otro array completamente diferente
}

