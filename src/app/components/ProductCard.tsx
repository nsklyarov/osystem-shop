'use client'

import Link from 'next/link'
import Image from 'next/image'
import CounterButton from './CounterButton'
import { useCart } from '../lib/store'
import { IProduct } from '..'

export default function ProductCard ({ data }: { data: IProduct }): React.ReactElement {
  const { id, image_url, title, description, price } = data
  const quantity = useCart((state) => state.items[id] || 0)

  return (
    <div key={id} className='relative rounded-[15px] bg-white/80 p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10 text-black'>
      <Image
        alt={title}
        width={320}
        height={300}
        src={image_url}
        className='object-cover rounded-lg'
      />
      <div className='p-6'>
        <Link
          href={`/product/${id}`}
          className='mt-4 inline-block text-indigo-600 hover:underline font-medium'
        >
          <h2 className='text-2xl font-bold mb-2 text-gray-900'>{title}</h2>
        </Link>
        <p className='text-gray-700 mb-4'>{description}</p>
        <p className='text-indigo-600 text-xl font-semibold'>цена: {price}</p>
        {quantity > 0 && (
          <p className='text-sm text-green-600 mt-2'>В корзине: {quantity} шт</p>
        )}
      </div>
      <div className='p-6'>
        <CounterButton productId={id}>купить</CounterButton>
      </div>
    </div>
  )
}
