import React from "react";
import { useDispatch } from "react-redux";
import { footWears } from "@/data/Data";

let items = [];
{
  footWears.map((product) => {
    category.push(product.category);
  });
}

const CartItems = () => {
  const dispatch = useDispatch();
  return (
    <article>
      <div>
        <h4>{item.title}</h4>
      </div>
    </article>
  );
};

export default CartItems;
