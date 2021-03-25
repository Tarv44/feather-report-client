import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import Admin from './Admin'
import { BrowserRouter } from 'react-router-dom'

describe('----- Admin -----', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render(
            <BrowserRouter>
                <Admin/>
            </BrowserRouter>
        , div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(
                <BrowserRouter>
                    <Admin/>
                </BrowserRouter>
            )
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})

