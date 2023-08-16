(() => {
  type Product = {
    name: string;
    price: number;
  };

  let products: Product[] = [];
  const addProduct = (product: Product) => {
    products.push(product);
  };

  addProduct({ name: 'Headsets', price: 50 });
  console.log(products);

  type Login = {
    email: string;
    password: number;
  };
  const login = ({ email, password }: Login) => {
    console.log(email, password);
  };

  login({ email: 'something@gmail.com', password: 1000212 });
})();
