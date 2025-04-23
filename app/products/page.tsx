import Link from "next/link"

// This is a Server Component (RSC) that generates static content at build time (SSG)
export default async function ProductsPage() {
  // In a real app, you would fetch this data from an API or database
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ]

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Products (Static Site Generation)</h1>
      <p className="mb-4">This page is statically generated at build time.</p>

      <ul className="space-y-2">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded">
            <Link href={`/products/${product.id}`} className="text-blue-600 hover:underline">
              {product.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Link href="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

// This enables Static Site Generation
export const dynamic = "force-static"
