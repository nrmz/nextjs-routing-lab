import Link from "next/link";
import { products } from "./data";

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

            <Link href={`/products/${product.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}