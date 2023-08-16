import { Product } from './product.model';

export let products: Product[] = [];
export const addProduct = (product: Product) => {
  products.push(product);
};

export const getStock = (): number => {
  return products.reduce((acc, current) => acc + current.stock, 0);
};
