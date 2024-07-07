import { Component } from 'react'
import { Products, ResponseApi } from '../types'
import Loading from './Loading'

type Props = {
  data: ResponseApi<Products> | undefined
  isLoading: boolean
}

class Cards extends Component<Props> {
  render() {
    const { data, isLoading } = this.props
    console.log(data?.products)
    return (
      <section className='results'>
        <div className='results__list'>
          {isLoading && <Loading />}
          {!data?.products.length && !isLoading ? (
            <div>Not found</div>
          ) : (
            data?.products.map(
              (product
                // id: number
                // title: string
                // category: string
                // images: []
                // price: number
              ) => (
                <div className='item' key={product.id}>
                  <p>Product Name: {product.title}</p>
                  <span>Category: {product.category}</span>
                  <div>Price: {product.price}</div>
                  <div className='product-image'>
                  {
                      product.images.map(item => (
<img src={item} alt={product.title} />
                    ))
                    
            }
                  </div>
                </div>
              ),
            )
          )}
        </div>
      </section>
    )
  }
}

export default Cards
