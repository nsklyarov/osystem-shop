export const formatAddress = (addr: string | undefined): string => {
  if (typeof addr === 'string' && addr.length > 0) {
    return `${addr.substring(0, 8)}...`
  }
  return ''
}
