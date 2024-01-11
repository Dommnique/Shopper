import { CartCard } from "../components"
import { useTitle } from "../hooks/useTitle"

export const Cart = () => {
  const products = [
    { "id": 1, "name": "Nike Gamma Force", "price": 150, "image": "/assets/images/sample1.jpg" },
    { "id": 2, "name": "Air Jordan 1", "price": 200, "image": "/assets/images/sample2.jpg" }
  ]

  useTitle("Cart");

  return (
    <main>
      <h1>Cart items: {products.length} </h1>
      <section>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}
