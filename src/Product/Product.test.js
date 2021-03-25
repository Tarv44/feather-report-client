import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import Product from './Product'
import { product, categories } from '../component.fixtures'

describe('----- Product -----', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render(
            <Product 
                productData={product}
                type={'edit'}
                allCats={categories}
            />
        , div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(
                <Product 
                    productData={product}
                    type={'edit'}
                    allCats={categories}
                />
            )
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})