// This is a Server Component with dynamic data (SSR)
export default async function Price({ productId }: { productId: string }) {
  // Simulate a delay to demonstrate dynamic data fetching
  await new Promise((resolve) => setTimeout(resolve, 500))

  // In a real app, you would fetch this data from an API or database
  // This demonstrates dynamic data fetching on the server
  const price = 99.99 + Number(productId) * 10
  const discount = Number(productId) * 5

  return (
    <div className="border p-4 rounded">
      <h3 className="font-semibold">Pricing Information</h3>
      <div className="flex justify-between mt-2">
        <span>Base Price:</span>
        <span>${price.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mt-1">
        <span>Discount:</span>
        <span>${discount.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mt-1 font-bold">
        <span>Final Price:</span>
        <span>${(price - discount).toFixed(2)}</span>
      </div>
      <div className="mt-2 text-sm bg-gray-100 p-2 rounded">
        <p>
          This is a <strong>Server Component with dynamic data (SSR)</strong>
        </p>
        <p>• Data fetched on each request</p>
        <p>• Rendered on the server</p>
        <p>• Can access request-time information</p>
      </div>
    </div>
  )
}

// This forces dynamic rendering (SSR)
export const dynamic = "force-dynamic"
