This project demonstrates different rendering patterns in Next.js and explains when to use each approach. Understanding these patterns is crucial for building performant and maintainable Next.js applications.

## Rendering Patterns Overview

Next.js offers several rendering patterns, each with specific use cases:

| Pattern | Description | Best For |
|---------|-------------|----------|
| **React Server Components (RSC)** | Components that render on the server with no client-side JavaScript | Static content, data fetching, reducing JavaScript bundle |
| **Server-Side Rendering (SSR)** | Pages generated on each request | Dynamic content that needs fresh data on every request |
| **Static Site Generation (SSG)** | Pages generated at build time | Content that rarely changes, maximum performance |
| **Client Components** | Components that run in the browser | Interactive UI elements, forms, state management |

## When to Use Each Pattern

### React Server Components (RSC)

**Use when:**

- Displaying static or database-sourced content
- Fetching data that doesn't need client-side interactivity
- Reducing client-side JavaScript bundle size
- Accessing server-only resources (databases, file system, etc.)

**Example in this demo:** `ProductInfo.tsx`

```tsx
// Server Component (default in App Router)
export default function ProductInfo({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  )
}
```

### Server-Side Rendering (SSR)

**Use when:**

- Content needs to be fresh on every request
- Page requires request-time information (cookies, headers)
- SEO is important for dynamic content
- User-specific content is displayed


**Example in this demo:** `Price.tsx`

```typescriptreact
// Server Component with dynamic rendering
export default async function Price({ productId }) {
  // Data fetched on every request
  const price = await fetchLatestPrice(productId)
  
  return <div>${price}</div>
}

// Force dynamic rendering
export const dynamic = 'force-dynamic'
```

### Static Site Generation (SSG)

**Use when:**

- Content doesn't change frequently
- Maximum performance is required
- Pages can be pre-rendered at build time
- Same content is shown to all users


**Example in this demo:** `products/page.tsx`

```typescriptreact
// Static page generation
export default async function ProductsPage() {
  const products = await fetchProducts()
  
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  )
}

// Force static generation
export const dynamic = 'force-static'
```

### Client Components

**Use when:**

- Interactive UI elements are needed
- Component needs to use React hooks (useState, useEffect, etc.)
- User events need to be handled
- Browser-only APIs are required


**Example in this demo:** `AddToCart.tsx`

```typescriptreact
"use client"

import { useState } from "react"

export default function AddToCart({ product }) {
  const [quantity, setQuantity] = useState(1)
  
  return (
    <div>
      <select onChange={e => setQuantity(Number(e.target.value))}>
        {/* Options */}
      </select>
      <button onClick={() => addToCart(product, quantity)}>
        Add to Cart
      </button>
    </div>
  )
}
```

## Decision Framework

When building a Next.js application, follow this decision process:

1. **Start with Server Components** (the default in App Router)

1. Most components don't need interactivity
2. Better performance by default

2. **Use Client Components when needed**

1. Add the "use client" directive only when required
2. Keep client components as small as possible

3. **Choose the rendering strategy**

1. Default: Static rendering with dynamic data (fetch with cache)
2. For always-fresh data: Use dynamic rendering (SSR)
3. For maximum performance: Use static generation (SSG)

4. **Consider component boundaries**

1. Client components can't import server components directly
2. Server components can pass server components as children to client components
