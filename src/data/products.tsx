interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
}

// products.ts
export const products: Product[] = [
    { id: 1, name: 'Product 1', category: 'Category A', price: 20 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 30 },
    // Add more products as needed
  ];
  