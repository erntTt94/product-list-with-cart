import Products from "./components/Products";
import Cart from "./components/Cart";
import Order from "./components/Order";
import data from "./data.json";
import { useEffect, useState } from "react";

function App() {
  const newData = data.map((d) => ({ ...d, quantity: 0 }));
  const [products, setProducts] = useState(newData);
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleWindow() {
    setIsOpen(true);
  }

  function reset() {
    setProducts(newData);
    setIsOpen(false);
  }

  function addToCart(productName) {
    setProducts(
      products.map((product) =>
        product.name === productName ? { ...product, quantity: 1 } : product
      )
    );
  }

  function increment(productName) {
    setProducts(
      products.map((product) =>
        product.name === productName
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  }

  function decrement(productName) {
    setProducts(
      products.map((product) =>
        product.name === productName && product.quantity >= 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  }

  function removeFromCart(productName) {
    setProducts(
      products.map((product) =>
        product.name === productName && product.quantity > 0
          ? { ...product, quantity: 0 }
          : product
      )
    );
  }

  useEffect(() => {
    if (isOpen) {
      document.querySelector(".container > div").classList.add("dimmed");
      document.querySelector(".cart").classList.add("dimmed");
    } else {
      document.querySelector(".container > div").classList.remove("dimmed");
      document.querySelector(".cart").classList.remove("dimmed");
    }
  }, [isOpen]);

  const itemsInCart = products.filter((p) => p.quantity > 0);

  return (
    <div className="container">
      <Products
        products={products}
        addToCart={addToCart}
        increment={increment}
        decrement={decrement}
      />
      <Cart
        products={itemsInCart}
        removeFromCart={removeFromCart}
        handleToggleWindow={handleToggleWindow}
      />
      {isOpen && <Order products={itemsInCart} reset={reset} />}
    </div>
  );
}

export default App;
