export interface CRUD<T> {
	getAll(): Promise<Partial<T>[]>;
	getById(id: string): Promise<Partial<T> | null>;
	create(resource: any): Promise<Partial<T>>;
	putById(id: string, resource: any): Promise<Partial<T>>;
	patchById(id: string, resource: any): Promise<Partial<T>>;
	deleteById(id: string): Promise<Partial<T>>;
}
