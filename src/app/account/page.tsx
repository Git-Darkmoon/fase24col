"use client"

import { useState } from "react"
import { useFetch } from "@/hooks/useFetch"

interface Purchase {
  id: string
  date: string
  total: number
  items: { name: string; quantity: number; price: number }[]
}

interface UserInfo {
  name: string
  email: string
  phone?: string
  address?: string
}

export default function AccountPage() {
  // Simula la obtención de información del usuario y su historial de compras
  const {
    data: userInfo,
    loading: loadingUser,
    error: errorUser,
  } = useFetch<UserInfo>("/api/user/info")
  const {
    data: purchases,
    loading: loadingPurchases,
    error: errorPurchases,
  } = useFetch<Purchase[]>("/api/user/purchases")

  const [showDetailsId, setShowDetailsId] = useState<string | null>(null)

  if (loadingUser || loadingPurchases) {
    return <div className="text-center py-20 text-slate-400">Cargando...</div>
  }

  if (errorUser || errorPurchases) {
    return (
      <div className="text-center py-20 text-red-500 font-semibold">
        Error cargando los datos de la cuenta.
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">
          Mi Cuenta
        </h1>

        {/* Información básica */}
        <section className="mb-12 bg-slate-50 rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Información Básica
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700">
            <div>
              <span className="font-medium">Nombre:</span> {userInfo?.name}
            </div>
            <div>
              <span className="font-medium">Correo:</span> {userInfo?.email}
            </div>
            {userInfo?.phone && (
              <div>
                <span className="font-medium">Teléfono:</span> {userInfo.phone}
              </div>
            )}
            {userInfo?.address && (
              <div className="sm:col-span-2">
                <span className="font-medium">Dirección:</span>{" "}
                {userInfo.address}
              </div>
            )}
          </div>
        </section>

        {/* Historial de compras */}
        <section className="bg-slate-50 rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Historial de Compras
          </h2>
          {purchases && purchases.length > 0 ? (
            <ul className="space-y-4">
              {purchases.map((purchase) => (
                <li
                  key={purchase.id}
                  className="bg-white rounded-lg shadow p-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-semibold text-slate-900">
                      Pedido #{purchase.id}
                    </div>
                    <div className="text-sm text-slate-500">
                      {new Date(purchase.date).toLocaleDateString()}
                    </div>
                    <div className="font-bold text-slate-900">
                      ${purchase.total.toFixed(2)}
                    </div>
                  </div>
                  <button
                    className="text-slate-700 text-sm underline"
                    onClick={() =>
                      setShowDetailsId(
                        showDetailsId === purchase.id ? null : purchase.id
                      )
                    }
                  >
                    {showDetailsId === purchase.id
                      ? "Ocultar Detalles"
                      : "Ver Detalles"}
                  </button>
                  {showDetailsId === purchase.id && (
                    <ul className="mt-2 text-slate-700 text-sm">
                      {purchase.items.map((item, idx) => (
                        <li key={idx} className="flex justify-between">
                          <span>
                            {item.name} x{item.quantity}
                          </span>
                          <span>
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-slate-500">No hay historial de compras.</div>
          )}
        </section>
      </div>
    </main>
  )
}
