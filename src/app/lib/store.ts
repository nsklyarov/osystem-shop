// src/app/lib/store.ts
'use client'

import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import { IProductState, ICartState } from '..'

export const useCart = create<ICartState>()(
  devtools(
    persist(
      (set) => ({
        items: {},
        add: (id, count) =>
          set((state) => ({
            items: {
              ...state.items,
              [id]: (state.items[id] || 0) + count
            }
          }))
      }),
      { name: 'cart-storage' }
    )
  )
)

export const useProducts = create<IProductState>()(
  devtools(persist(
    (set) => ({
      products: [],
      page: 1,
      setPage: (p) => set(() => ({ page: p })),
      setProducts: (products) => set(() => ({ products })),
      appendProducts: (newItems) => set((state) => {
        const existingIds = new Set(state.products.map(p => p.id))
        const uniqueItems = newItems.filter(p => !existingIds.has(p.id))
        return { products: [...state.products, ...uniqueItems] }
      })
    }),
    { name: 'product-storage' }
  ))
)
