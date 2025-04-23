import Link from "next/link"

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Next.js Rendering Patterns Demo</h1>
      <p className="mb-4">This demo showcases different rendering patterns in Next.js:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Server-Side Rendering (SSR)</li>
        <li>Static Site Generation (SSG)</li>
        <li>React Server Components (RSC)</li>
      </ul>
      <div className="flex flex-col gap-4">
        <Link href="/products" className="text-blue-600 hover:underline">
          View All Products (SSG)
        </Link>
        <Link href="/products/1" className="text-blue-600 hover:underline">
          View Product 1 (Dynamic with RSC)
        </Link>
      </div>
    </main>
  )
}
