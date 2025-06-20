'use client'

import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { useProducts } from '../lib/store'
import { sendRequest } from '../lib/sendRequest'
import { IProductResponse } from '..'

export default function ProductList (): React.ReactElement {
  const { products, page, appendProducts, setPage } = useProducts()

  useEffect(() => {
    sendRequest<IProductResponse>(`/products?page=${page}&page_size=20`)
      .then((data) => appendProducts(data.items))
      .catch((error) => console.error(error))
  }, [page, appendProducts])

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4'>
        {products.map((p) => (
          <ProductCard key={p.id} data={p} />
        ))}
      </div>
      <div className='flex justify-center py-6'>
        <button
          onClick={() => setPage(page + 1)}
          className='rounded-md bg-[#222222] px-6 py-2 text-white hover:bg-[#111111] transition'
        >
          Загрузить ещё
        </button>
      </div>
    </>
  )
}
