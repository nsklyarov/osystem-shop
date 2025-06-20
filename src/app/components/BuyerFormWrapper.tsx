'use client'
import BuyerForm from './BuyerForm'
import { useCart } from '../lib/store'
import { ICartState } from '../'

export default function BuyerFormWrapper (): React.ReactElement | null {
  const items = useCart((state: ICartState) => state.items)

  if (items.length === 0) return null
  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 bg-white/90 shadow-xl p-4 border-t border-gray-200'>
      <BuyerForm />
    </div>
  )
}
