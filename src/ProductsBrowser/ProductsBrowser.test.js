import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import ProductsBrowser from './ProductsBrowser'
import { products } from '../component.fixtures'
import ProductContext from '../productContext'
import { BrowserRouter } from 'react-router-dom'

const selected = products.slice(3)
const contextValue = { selected }
const match = {
    params: {
        co_path: '/path'
    }
}

describe('----- ProductsBrowser -----', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render(
            <ProductContext.Provider value={contextValue}>
                <BrowserRouter>
                    <ProductsBrowser match={match}/>
                </BrowserRouter> 
            </ProductContext.Provider>    
        , div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(
                <ProductContext.Provider value={contextValue}>
                    <BrowserRouter>
                        <ProductsBrowser match={match}/>
                    </BrowserRouter> 
                </ProductContext.Provider>  
            )
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})