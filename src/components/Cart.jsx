import EmptyCart from "./EmptyCart";
import FullCart from "./FullCart";

export default function Cart({ products, removeFromCart, handleToggleWindow }) {
  const totalQuantity = products.reduce((prev, cur) => prev + cur.quantity, 0);

  return (
    <div className="cart">
      <p className="cart-title">Your Cart ({totalQuantity})</p>
      {totalQuantity > 0 ? (
        <FullCart
          itemsInCart={products}
          handleRemoveItem={removeFromCart}
          handleToggleWindow={handleToggleWindow}
        />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
