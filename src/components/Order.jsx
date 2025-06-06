export default function Order({ products, reset }) {
  return (
    <div className="order-con">
      <img
        src="./assets/images/icon-order-confirmed.svg"
        alt="icon for order-confirmed"
      />
      <p className="order-title">Order Confirmed</p>
      <p className="order-subtitle">We hope you enjoy your food!</p>
      <div className="order-products-con">
        {products.map((product) => (
          <div key={product.name} className="order-products">
            <img src={product.image.thumbnail} alt={product.name} />
            <div>
              <p>{product.name}</p>
              <span>{product.quantity}x</span>
              <span>@${Number(product.price).toFixed(2)}</span>
              <span>
                ${Number(product.price * product.quantity).toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="order-total">
        Order Total
        <span>
          $
          {products
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </span>
      </p>
      <button onClick={reset}>Start New Order</button>
    </div>
  );
}
