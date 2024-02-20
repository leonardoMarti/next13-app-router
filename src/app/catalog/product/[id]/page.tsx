import AddToCartButton from "./add-to-cart-button";

interface ProductProps {
  params: {
    id: string;
  };
}

export default async function Product(props: ProductProps) {
  const { id } = props.params;

  const response = await fetch("https://api.github.com/users/leonardoMarti");
  const user = await response.json();

  return (
    <div>
      <p>Product: {id}</p>
      <AddToCartButton />
    </div>
  );
}
