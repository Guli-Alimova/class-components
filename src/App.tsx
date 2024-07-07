import { Component } from 'react'
import Search from './components/Search'
import Cards from './components/Cards'
import { getProducts } from './api/index'
import { ResponseApi } from './types'
import { Products } from 'types'
import ErrorBoundary from './components/ErrorBoundry'
import './App.css'

type State = {
  defaultValue: string
  isLoading: boolean
  response?: ResponseApi<Products>
}
const SEARCH = 'search'
class App extends Component<object, State> {
  state: State = { defaultValue: '', isLoading: false }

  componentDidMount() {
    const defaultValue = localStorage.getItem(SEARCH) || ''
    this.setState({ defaultValue, isLoading: true })
    getProducts(defaultValue).then((response) => this.setState({ response, isLoading: false }))
  }

  handleChange = async (value: string) => {
    localStorage.setItem(SEARCH, value)
    this.setState({ isLoading: true, response: undefined })
    const response = await getProducts(value)
    this.setState({ response, isLoading: false })
  }

  render() {
    return (
      <ErrorBoundary fallback={<h1>Error</h1>}>
        <div className='container'>
          <div className='home'>
            <section className='section-search'>
              <Search
                isLoading={this.state.isLoading}
                defaultValue={this.state.defaultValue}
                onChange={this.handleChange}
              />
            </section>

            <Cards isLoading={this.state.isLoading} data={this.state.response} />
          </div>
        </div>
      </ErrorBoundary>
    )
  }
}

export default App
