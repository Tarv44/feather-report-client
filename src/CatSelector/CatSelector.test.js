import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import CatSelector from './CatSelector'
import { categories } from '../component.fixtures'


describe('----- CatSelector -----', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render(<CatSelector categories={categories}/>, div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(<CatSelector categories={categories}/>)
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})