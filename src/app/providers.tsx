'use client'

import React from 'react'
import { MetaMaskProvider, MetaMaskSDKOptions } from '@metamask/sdk-react'

const url = typeof window !== 'undefined' ? window.location.host : 'defaultHost'

const name = 'osystem-shop'

const dappMetadata = { name, url }

const sdkOptions: MetaMaskSDKOptions = {
  dappMetadata,
  enableAnalytics: false,
  logging: { developerMode: false },
  checkInstallationImmediately: false
}
export function Providers ({ children }: { children: React.ReactNode }): React.ReactElement {
  return <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>{children}</MetaMaskProvider>
}
