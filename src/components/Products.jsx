import Product from "./Product";

export default function Products({
  products,
  addToCart,
  increment,
  decrement,
}) {
  return (
    <div>
      <h1>Desserts</h1>
      <div className="products">
        {products.map((product) => {
          return (
            <Product
              key={product.name}
              product={product}
              addToCart={addToCart}
              increment={increment}
              decrement={decrement}
            />
          );
        })}
      </div>
    </div>
  );
}
