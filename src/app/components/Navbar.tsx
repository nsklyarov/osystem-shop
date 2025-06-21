'use client'

import Link from 'next/link'
import { ConnectWalletButton } from './Connect'

const Navbar = (): React.ReactElement => {
  return (
    <nav className='flex items-center justify-between max-w-screen-xl px-6 mx-auto py-7 rounded-xl'>
      <Link href='/' className='flex gap-1 px-6'>
        <span className='hidden text-2xl font-bold sm:block'>
          <span className='text-white-900'>Template</span>
        </span>
      </Link>
      <div className='flex gap-4 px-6'>
        <ConnectWalletButton />
      </div>
    </nav>
  )
}

export default Navbar
