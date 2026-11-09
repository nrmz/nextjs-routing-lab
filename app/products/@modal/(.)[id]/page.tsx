
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { products } from "../../data";
import CloseButton from "../../components/CloseButton";

type ModalPageProps = {
  params: Promise<{
    id: string;
  }>;
};

// کامپوننت اصلی
export default function ProductModal({ params }: ModalPageProps) {
  return (
    <Suspense
      fallback={
        <div className="modal-overlay">
          <div className="modal-content">
            <p>Loading product...</p>
          </div>
        </div>
      }
    >
      <ProductModalContent params={params} />
    </Suspense>
  );
}

// کامپوننت دریافت اطلاعات
async function ProductModalContent({ params }: ModalPageProps) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <CloseButton />

        <h2>{product.name}</h2>

        <p>Price: ${product.price}</p>

        <p>{product.description}</p>

        <CloseButton />
      </div>
    </div>
  );
}