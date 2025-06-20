import ReviewCard from '../../components/ReviewCard'
import ProductCard from '../../components/ProductCard'
import { sendRequest } from '@/app/lib/sendRequest'
import { IProductResponse, IReview } from '../../'

export default async function ProductPage (): Promise<React.ReactElement> {
  const productData: IProductResponse = await sendRequest('/products?page=1&page_size=20')
  const reviewData: IReview[] = await sendRequest('/reviews')

  const [product] = productData.items

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4'>
      <div className='flex flex-col space-y-6'>
        <ProductCard key={product.id} data={product} />
      </div>
      <div className='flex flex-col space-y-6'>
        {reviewData.map((r: IReview) => (
          <ReviewCard key={r.id} data={r} />
        ))}
      </div>
    </div>
  )
}
