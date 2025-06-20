export default function Button ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }): React.ReactElement {
  return (
    <button
      onClick={onClick}
      className='px-6 py-3 bg-[#222222] text-white font-semibold rounded-lg shadow-md hover:bg-[#111111] focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 transition'
    >
      {children}
    </button>
  )
}
