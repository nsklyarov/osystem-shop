'use client'

import { useState } from 'react'
import { IMaskInput } from 'react-imask'
import { useCart, useProducts } from '@/app/lib/store'
import { IProduct } from '../'

export default function BuyerForm (): React.ReactElement | null {
  const [phone, setPhone] = useState('')

  // cartItems — объект { [id]: count }
  const cartItems = useCart(state => state.items)
  const allProducts = useProducts(state => state.products)

  const cartProducts: IProduct[] = allProducts.filter(p => p.id in cartItems)

  if (cartProducts.length === 0) return null

  const total = cartProducts.reduce((sum, p) => sum + p.price * (cartItems[p.id] || 0), 0)

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    console.log('Номер телефона:', phone)
    console.log('Корзина:', cartProducts.map(p => ({
      ...p,
      count: cartItems[p.id]
    })))
  }

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-2xl rounded-t-[15px] border-t border-gray-300'>
      <div className='max-w-4xl mx-auto px-6 py-4'>
        <h2 className='text-2xl font-bold text-gray-900 mb-2'>Ваша корзина</h2>

        <ul className='divide-y divide-gray-300 mb-4 max-h-64 overflow-auto bg-gray-50 rounded-md p-2'>
          {cartProducts.map(product => (
            <li key={product.id} className='py-2 flex justify-between text-gray-900'>
              <span>{product.title} × {cartItems[product.id]}</span>
              <span className='font-semibold'>{product.price * (cartItems[product.id] || 0)} ₽</span>
            </li>
          ))}
        </ul>

        <div className='text-lg font-semibold mb-4 flex justify-between text-gray-900 bg-gray-50 rounded-md p-3'>
          <span>Итого:</span>
          <span>{total} ₽</span>
        </div>

        <form onSubmit={handleSubmit} className='grid grid-cols-[1fr_auto] gap-4 items-center bg-gray-50 rounded-md p-3'>
          <IMaskInput
            mask='+{7} (000) 000-00-00'
            value={phone}
            onAccept={(value: string) => setPhone(value)}
            placeholder='+7 (___) ___-__-__'
            className='w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            required
            unmask={false}
          />
          <button
            type='submit'
            className='whitespace-nowrap rounded-md bg-[#222222] px-6 py-2 text-white hover:bg-[#111111] transition'
          >
            Заказать
          </button>
        </form>
      </div>
    </div>

  )
}
