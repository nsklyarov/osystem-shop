import { isServer } from './isServer'
import { EXTERNAL_API } from './constants'

export async function sendRequest<T> (path: string, init?: RequestInit): Promise<T> {
  const url = isServer() ? `${EXTERNAL_API}${path}` : `/api/proxy${path}`
  console.log({ path, isServer: isServer(), url })

  const res = await fetch(url, init)

  if (!res.ok) throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`)

  return await res.json()
}
