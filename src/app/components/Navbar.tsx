"use client"

import Link from "next/link"
import { useCart } from "../(context)/CartContext"

export const Navbar = () => {
  const { cartItems } = useCart()

  return (
    <nav className="">
      <div className="mx-auto container dynamicPx border-b border-slate-300">
        <div className="flex h-16 items-center justify-between">
          {/* Company Name */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-slate-950 text-2xl font-bold tracking-tight uppercase"
            >
              Fase24Col
            </Link>
          </div>
          {/* Nav Links */}
          <div className="flex space-x-6">
            <Link
              href="/products"
              className="text-slate-900 hover:text-slate-500 transition-colors font-medium"
            >
              Todos los productos
            </Link>
            <Link
              href="/account"
              className="text-slate-900 hover:text-slate-500 transition-colors font-medium"
            >
              Mi cuenta
            </Link>
            <Link
              href="/cart"
              className="text-slate-900 hover:text-slate-500 transition-colors font-medium"
            >
              Carrito{" "}
              {cartItems.length > 0 && <span>({cartItems.length})</span>}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
