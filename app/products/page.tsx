import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Coffee Machine",
    price: 120,
  },
  {
    id: 2,
    name: "Coffee Grinder",
    price: 80,
  },
  {
    id: 3,
    name: "Coffee Maker",
    price: 150,
  },
];

export default function ProductsPage() {
  return (
    <main className="container">
      <h1>Products</h1>

      <Link href="/">Back to Home</Link>

      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}