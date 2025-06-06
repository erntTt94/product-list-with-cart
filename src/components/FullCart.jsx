export default function FullCart({
  itemsInCart,
  handleRemoveItem,
  handleToggleWindow,
}) {
  return (
    <div className="full-cart-con">
      {itemsInCart.map((item) => (
        <div className="full-cart" key={item.name}>
          <p>{item.name}</p>
          <span>{item.quantity}x</span>
          <span>@ ${Number(item.price).toFixed(2)}</span>
          <span>${Number(item.price * item.quantity).toFixed(2)}</span>
          <button onClick={() => handleRemoveItem(item.name)}>
            <img src="./assets/images/icon-remove-item.svg" alt="icon x" />
          </button>
        </div>
      ))}
      <p className="order-total">
        Order Total
        <span>
          $
          {itemsInCart
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </span>
      </p>
      <div>
        <img
          src="./assets/images/icon-carbon-neutral.svg"
          alt="icon-carbon-neutral"
        />
        <p>
          This is a <span>carbon-neutral</span> delivery
        </p>
      </div>
      <button className="btn-confirm" onClick={handleToggleWindow}>
        Confirm Order
      </button>
    </div>
  );
}
