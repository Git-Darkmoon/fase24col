// components/ProductHighlights.tsx
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Oversized Hoodie",
    price: "$69.900",
    image: "/HomePage/highlight1.jpg",
  },
  {
    id: 2,
    name: "Graphic Tee",
    price: "$35.000",
    image: "/HomePage/highlight2.jpg",
  },
  {
    id: 3,
    name: "Cargo Pants",
    price: "$59.000",
    image: "/HomePage/highlight3.jpg",
  },
]

export const ProductHighlights = () => (
  <section className="py-12 bg-slate-50">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-slate-900">
        Popular Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center"
          >
            <Image
              width={520}
              height={520}
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold text-slate-900">
              {product.name}
            </h3>
            <span className="text-slate-700 mb-4">{product.price}</span>
            <Link
              href={`/products`}
              className="px-4 py-2 bg-slate-900 text-white rounded font-medium hover:bg-slate-700 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
)
