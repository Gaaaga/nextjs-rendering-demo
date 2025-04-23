import { Suspense } from "react"
import Link from "next/link"
import ProductInfo from "./ProductInfo"
import Price from "./Price"
import AddToCart from "./AddToCart"

// This is the main page component (RSC)
export default async function ProductPage({ params }: { params: { id: string } }) {
  const productId = params.id

  // In a real app, you would fetch this data from an API or database
  const product = {
    id: productId,
    name: `Product ${productId}`,
    description: `This is the description for Product ${productId}.`,
    price: 99.99,
    stock: 10,
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Product Detail Page</h1>

      {/* ProductInfo is a Server Component (RSC) */}
      <ProductInfo product={product} />

      <div className="my-4">
        {/* Price is a Server Component with dynamic data (SSR) */}
        <Suspense fallback={<div>Loading price...</div>}>
          <Price productId={productId} />
        </Suspense>
      </div>

      {/* AddToCart is a Client Component (CSR) */}
      <AddToCart product={product} />

      <div className="mt-6">
        <Link href="/products" className="text-blue-600 hover:underline">
          Back to Products
        </Link>
      </div>
    </div>
  )
}
