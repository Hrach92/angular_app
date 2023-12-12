export type ProductType = {
  id: number;
  name: string;
  price: number;
  category: string;
};
export const products: ProductType[] = [
  { id: 1, name: 'Iphone', price: 25.99, category: 'Electronics' },
  { id: 2, name: 'Shirt', price: 39.99, category: 'Clothing' },
  { id: 3, name: 'Spoon', price: 15.49, category: 'Home & Kitchen' },
];
