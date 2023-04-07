import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  const loadProducts = await fetch("products.json");
  const products = await loadProducts.json();
  //
  const storedCart = getShoppingCart();
  const savedCart = [];
  //   console.log(storedCart);
  for (const id in storedCart) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }

  //   return { products, savedCart };
  return savedCart;
};

export default cartProductsLoader;
