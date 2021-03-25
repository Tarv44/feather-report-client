import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import Feature from './Feature'
import { features } from '../component.fixtures'

describe('----- Feature -----', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render(
            <Feature
                features={features}
            />
        , div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(<Feature
                features={features}
            />)
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})