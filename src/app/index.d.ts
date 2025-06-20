export interface IProduct {
  id: number
  image_url: string
  title: string
  description: string
  price: number
}

export interface IReview {
  id: number
  text: string
}

export interface ICounterButton {
  productId: number
  children?: React.ReactNode
}

export interface IPagination {
  amount: number
  page: number
  total: number
}

export interface IProductResponse extends IPagination {
  items: IProduct[]
}

export interface ICartState {
  items: { [index: string]: number }
  add: (id: number, count: number) => void
}

export interface IProductState {
  products: IProduct[]
  page: number
  setPage: (p: number) => void
  setProducts: (products: IProduct[]) => void
  appendProducts: (products: IProduct[]) => void
}
