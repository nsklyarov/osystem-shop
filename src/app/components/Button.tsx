
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  onClick?: () => void | Promise<void>
}

export default function Button ({ children, onClick, ...props }: ButtonProps): React.ReactElement {
  return (
    <button
      onClick={onClick}
      className='px-6 py-3 bg-[#222222] text-white font-semibold rounded-lg shadow-md hover:bg-[#111111] focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 transition'
      {...props}
    >
      {children}
    </button>
  )
}
