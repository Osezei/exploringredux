import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItems from "./CartItems";
import CartItem from "./CartItem";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { amount } = useSelector((store) => store.cart);
  if (amount < 1) {
    return <h1>your bag is empty</h1>;
  }
  return (
    <section>
      <header>
        <h3>bag</h3>
      </header>
      <div>
        {CartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CartContainer;
