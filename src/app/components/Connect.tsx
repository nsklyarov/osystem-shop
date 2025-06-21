'use client'

// import WalletIcon from '../public/icons/WalletIcon'

import Button from './Button'

import { useSDK } from '@metamask/sdk-react'
import { formatAddress } from '../lib/formatAddress'
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from './Popover'

export const ConnectWalletButton = (): React.ReactElement => {
  const { sdk, connected, connecting, account } = useSDK()

  const connect = async (): Promise<void> => {
    try {
      if (sdk != null) {
        await sdk.connect()
      }
    } catch (err) {
      console.warn('No accounts found', err)
    }
  }

  const disconnect = async (): Promise<void> => {
    try {
      if (sdk != null) {
        await sdk.terminate()
      }
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <div className='relative'>
      {connected
        ? (
          <Popover>
            <PopoverTrigger>
              <Button>{formatAddress(account)}</Button>
            </PopoverTrigger>
            <PopoverContent className='mt-2 w-44 bg-black-100 border rounded-md shadow-lg right-0 z-10 top-10' onClick={disconnect}>
              Disconnect
            </PopoverContent>
          </Popover>
          )
        : (
          <Button disabled={connecting} onClick={connect}>
            {/* <WalletIcon className='mr-2 h-4 w-4' />  */}
            Connect Wallet
          </Button>
          )}
    </div>
  )
}
