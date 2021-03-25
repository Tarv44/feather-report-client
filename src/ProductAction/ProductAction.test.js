import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import ProductAction from './ProductAction'

describe('----- ProductAction -----', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render(<ProductAction type='edit'/>, div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(<ProductAction type='edit'/>)
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})