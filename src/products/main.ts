import { addProduct, getStock } from './product.service';

addProduct({
  name: 'Headset',
  price: 50,
  stock: 10,
});

addProduct({
  name: 'Keyboard',
  price: 40,
  stock: 20,
});

console.log(getStock());
