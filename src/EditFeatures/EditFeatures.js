import React, {Component} from 'react';
import ProductContext from '../productContext';
import styles from './EditFeatures.module.css'

export default class EditFeatures extends Component {
    static contextType = ProductContext;

    state = {
        catFeatures: []
    }

    componentDidMount() {
        const allFeatures = [
            {
              message: `Full lifetime warranty.`,
              id: 'feat1'
            },
            {
              message: `White Pearl`,
              id: 'feat10'
            },
            {
              message: `Onyx Black`,
              id: 'feat2'
            },
            {
              message: `Stainless Steel`,
              id: 'feat3'
            },
            {
              message: `Sharpening Sheath`,
              id: 'feat11'
            },
            {
              message: `Carbon`,
              id: 'feat4'
            },
            {
              message: `Nonstick`,
              id: 'feat12'
            },
            {
              message: `Titanium`,
              id: 'feat13'
            },
            {
              message: `Triple Rivet`,
              id: 'feat5'
            },
        ]

        this.setState({ catFeatures: allFeatures})
    }

    setFeatures() {
        if (this.props.features.length === 0) {
            const featureOptions = this.state.catFeatures.map((f, i) => {
                return <option key={i}>{f}</option>
            })
            return (
                <select>
                    <option>Select Feature</option>
                    {featureOptions}
                </select>
            )
        } else {
            return this.props.features.map((f, i) => {
                const featureOptions = this.state.catFeatures.map((feat, c) => {
                    if (feat.id === f.id) {
                        return <option key={c} selected={true}>{feat.message}</option>
                    } else {
                        return <option key={c}>{feat.message}</option>
                    }
                })
                if (i === 0) {
                    return (
                        <select id={i} key={i}>
                            {featureOptions}
                        </select>
                    )
                } else {
                    return (
                        <>
                            <select key={i}>
                                {featureOptions}
                            </select>
                            <button className={styles.remove} onClick={e => this.props.removeFeature(e, i)}>Remove Feature</button>
                        </>
                    )
                }
            })
        }
    }

    updateCatFeatures(category) {
        this.props.handleCategory(category)
    }

    render() {
        const id = this.props.id

        const categories = this.context.categories.map(c => {
            if (c === this.props.category) {
                return <option selected={true}>{c}</option>
            }
            return <option>{c}</option>
        })

        const features = this.setFeatures()

        return (
            <fieldset>
                <legend>Features</legend>
                <label htmlFor={`productCats-${id}`}>Category</label>
                <select 
                    id={`productCats-${id}`} 
                    onChange={e => this.updateCatFeatures(e.target.value)}
                >
                    <option>Select Category</option>
                    {categories}
                </select>
                <p>Features</p>
                {features}
                <button className={styles.addFeat} onClick={e => this.props.addFeature(e)}>Add Another Feature</button>
            </fieldset>
        )
    }
}