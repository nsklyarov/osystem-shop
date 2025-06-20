import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'
import { IReview } from '..'

const window = new JSDOM('').window
const DOMPurify = createDOMPurify(window)

export default async function ReviewCard (props: { data: IReview }): Promise<React.ReactElement> {
  const { data } = props
  const { id, text } = data

  return (
    <div key={id} className='relative rounded-[15px] bg-white/80 p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10 text-black'>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }} />
    </div>
  )
}
