import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { products } from "../data";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <main className="container">
      <h1>Product Details</h1>

      <Suspense fallback={<p>Loading product...</p>}>
        <ProductDetails params={params} />
      </Suspense>
    </main>
  );
}

async function ProductDetails({ params }: ProductPageProps) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <>
      <h2>{product.name}</h2>

      <p>Price: ${product.price}</p>

      <p>{product.description}</p>

      <Link href="/products">
        Back to Products
      </Link>
    </>
  );
}