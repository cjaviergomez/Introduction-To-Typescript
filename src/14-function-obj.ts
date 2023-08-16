(() => {
  let products: any[] = [];
  const addProduct = (product: { name: string; price: number }) => {
    products.push(product);
  };

  addProduct({ name: 'Headsets', price: 50 });
  console.log(products);

  const login = ({ email, password }: { email: string; password: number }) => {
    console.log(email, password);
  };

  login({ email: 'something@gmail.com', password: 1000212 });
})();
