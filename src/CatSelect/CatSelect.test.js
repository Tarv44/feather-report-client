import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import CatSelect from './CatSelect'

describe('----- CatSelect -----', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render(<CatSelect/>, div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(<CatSelect/>)
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})