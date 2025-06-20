'use client'

import { useState } from 'react'
import Button from './Button'
import { useCart } from '../lib/store'
import { ICounterButton } from '..'

export default function CounterButton ({ productId, children }: ICounterButton): React.ReactElement {
  const [count, setCount] = useState(1)
  const [mode, setMode] = useState<'buy' | 'counter'>('buy')
  const add = useCart((state) => state.add)

  const increment = (): void => setCount((c) => c + 1)
  const decrement = (): void => setCount((c) => (c > 1 ? c - 1 : 1))

  const handleAdd = (count: number): void => {
    add(productId, count)
    setMode('buy')
    setCount(1)
  }

  return (
    <div className='inline-flex items-center space-x-2'>
      {mode === 'buy'
        ? (
          <Button onClick={() => setMode('counter')}>
            {children ?? 'Купить'}
          </Button>
          )
        : (
          <>
            <Button onClick={decrement}>−</Button>
            <Button onClick={() => handleAdd(count)}>{count}</Button>
            <Button onClick={increment}>+</Button>
          </>
          )}
    </div>
  )
}
