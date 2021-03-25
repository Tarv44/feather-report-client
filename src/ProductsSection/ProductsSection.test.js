import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import ProductsSection from './ProductsSection'
import { products, categories } from '../component.fixtures'

describe('----- ProductsSection -----', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render(
            <ProductsSection 
                products={products}
                allCats={categories}
                type='edit'
            />
        , div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(
                <ProductsSection 
                    products={products}
                    allCats={categories}
                    type='edit'
                />
            )
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})