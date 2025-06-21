import React, { useRef, useEffect } from 'react'

export function Popover ({ children }: { children: React.ReactNode }): React.ReactElement {
  return <div className='relative inline-block'>{children}</div>
}

export function PopoverTrigger ({ children, onClick, ...props }: { children: React.ReactNode, onClick?: () => void }): React.ReactElement {
  return (
    <button
      onClick={onClick}
      className='px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded'
      {...props}
    >
      {children}
    </button>
  )
}

type PopoverContentProps = React.HTMLAttributes<HTMLDivElement>
& {
  children: React.ReactNode
  show?: boolean
  setShow?: (value: boolean) => void
}

export function PopoverContent ({
  children,
  show,
  setShow,
  ...props
}: PopoverContentProps): React.ReactElement | null {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside (event: MouseEvent): void {
      if ((ref.current != null) && !ref.current.contains(event.target as Node)) {
        if (typeof setShow === 'function') setShow(false)
      }
    }

    if (show === true) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [show, setShow])

  if (show === false) return null

  return (
    <div
      ref={ref}
      className='absolute z-10 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg p-4'
      {...props}
    >
      {children}
    </div>
  )
}
