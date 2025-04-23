"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

// This is a Client Component (CSR)
export default function AddToCart({
  product,
}: {
  product: {
    id: string
    name: string
    stock: number
  }
}) {
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    // In a real app, you would add the product to the cart
    console.log(`Added ${quantity} of ${product.name} to cart`)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="border p-4 rounded">
      <div className="flex items-center gap-4 mb-4">
        <label htmlFor="quantity" className="font-medium">
          Quantity:
        </label>
        <select
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border rounded p-1"
        >
          {[...Array(product.stock)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      <Button onClick={handleAddToCart} className="w-full">
        {added ? "Added to Cart!" : "Add to Cart"}
      </Button>

      <div className="mt-2 text-sm bg-gray-100 p-2 rounded">
        <p>
          This is a <strong>Client Component (CSR)</strong>
        </p>
        <p>• Includes client-side JavaScript</p>
        <p>• Can use React hooks (useState, useEffect, etc.)</p>
        <p>• Handles user interactions</p>
      </div>
    </div>
  )
}
