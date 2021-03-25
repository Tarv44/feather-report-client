import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import EditProduct from './EditProduct'
import { categories } from '../component.fixtures'

describe('----- EditProduct -----', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render(
            <EditProduct
                allCats={categories}
            />
        , div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(
                <EditProduct
                    allCats={categories}
                />
            )
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})