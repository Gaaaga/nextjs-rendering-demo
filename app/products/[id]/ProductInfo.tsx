// This is a Server Component (RSC)
export default function ProductInfo({
  product,
}: {
  product: {
    id: string
    name: string
    description: string
  }
}) {
  return (
    <div className="border p-4 rounded mb-4">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <div className="mt-2 text-sm bg-gray-100 p-2 rounded">
        <p>
          This is a <strong>React Server Component (RSC)</strong>
        </p>
        <p>• Rendered on the server</p>
        <p>• No client-side JavaScript</p>
        <p>• Can access server resources directly</p>
      </div>
    </div>
  )
}
