"use client";

import { useState } from "react";

export default function AddToCartButton() {
  const [count, setCount] = useState(0);

  const addToCart = () => setCount((state) => state + 1);

  return (
    <button type="button" onClick={addToCart}>
      Adicionar = {count}
    </button>
  );
}
