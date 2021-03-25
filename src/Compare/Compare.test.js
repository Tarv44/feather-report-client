import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import Compare from './Compare'
import ProductContext from '../productContext'
import { products } from '../component.fixtures'
import { BrowserRouter } from 'react-router-dom'

const selected = products.slice(3)
const contextValue = { selected, browser_path: '/path' }

describe('----- Compare -----', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render(
            <ProductContext.Provider value={contextValue}>
                <BrowserRouter>
                    <Compare/>
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
                        <Compare/>
                    </BrowserRouter> 
                </ProductContext.Provider>
            )
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})