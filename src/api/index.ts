import { Products, ResponseApi } from '../types'

export async function getProducts(search: string = ''): Promise<ResponseApi<Products>> {
  try {
    const url = search
      ? `${import.meta.env.VITE_API_URL}products/search?q=${search}`
      : `${import.meta.env.VITE_API_URL}products`
    const result = await fetch(url)
    if (!result.ok) {
      throw new Error()
    }
    return result.json()
  } catch {
    throw new Error('Error')
  }
}
