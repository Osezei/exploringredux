import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);
  return (
    <nav>
      <h3>redux</h3>
      <div>
        <p>{amount}</p>
      </div>
    </nav>
  );
};

export default Navbar;
