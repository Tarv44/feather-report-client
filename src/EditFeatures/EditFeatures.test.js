import React from 'react'
import ReactDom from 'react-dom'
import renderer from 'react-test-renderer'
import EditFeatures from './EditFeatures'
import { categories, features } from '../component.fixtures'

describe('----- EditFeatures -----', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDom.render(
            <EditFeatures
                allCats={categories}
                features={features}
                category={categories[0]}
            />
        , div)
        ReactDom.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const comp = renderer
            .create(
                <EditFeatures
                    allCats={categories}
                    features={features}
                    category={categories[0]}
                />
            )
            .toJSON()
        expect(comp).toMatchSnapshot()
    })
})