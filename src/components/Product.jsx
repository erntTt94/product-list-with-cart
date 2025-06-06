export default function Product({ product, addToCart, increment, decrement }) {
  return (
    <div>
      <div className="product-img-con">
        <img
          src={product.image.desktop}
          alt={product.name}
          className={product.quantity > 0 ? "selected" : ""}
        />
        {product.quantity <= 0 ? (
          <button
            className="product-img-btn"
            onClick={() => addToCart(product.name)}
          >
            <img src="./assets/images/icon-add-to-cart.svg" alt="cart" />
            Add to cart
          </button>
        ) : (
          <button className="product-img-btn quantity-picker">
            <img
              onClick={() => decrement(product.name)}
              src="./assets/images/icon-decrement-quantity.svg"
              alt="decrement icon"
            />
            <span>{product.quantity}</span>
            <img
              onClick={() => increment(product.name)}
              src="./assets/images/icon-increment-quantity.svg"
              alt="increment icon"
            />
          </button>
        )}
      </div>
      <p>{product.category}</p>
      <p>{product.name}</p>
      <span className="product-price">${Number(product.price).toFixed(2)}</span>
    </div>
  );
}
