export type ResponseApi<P> = {
  count: number
  next: number | null
  previous: number | null
  products: P[]
}

export type Products = {
  title: string
  category: string
  id: number | undefined
  images: []
  price: number
}
