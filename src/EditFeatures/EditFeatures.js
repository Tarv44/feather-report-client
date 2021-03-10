import React, {Component} from 'react';
import ProductContext from '../productContext';
import styles from './EditFeatures.module.css';
import { features, categories } from '../dummy-store';

export default class EditFeatures extends Component {
    static contextType = ProductContext;

    state = {
        catFeatures: []
    }

    componentDidMount() {
        const category = this.props.category
        const catFeatures = category !== 'Select Category' 
            ? features[this.props.category]
            : []
        this.setState({ catFeatures})
    }

    setFeatures() {
        if (this.props.features.length === 0) {
            const featureOptions = this.state.catFeatures.map((f, i) => {
                return <option key={i}>{f.message}</option>
            })
            return (
                <div>
                    <select>
                        <option>Select Feature</option>
                        {featureOptions}
                    </select>
                </div>
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
                        <div key={i}>
                            <select>
                                <option>Select Feature</option>
                                {featureOptions}
                            </select>
                        </div>
                    )
                } else {
                    return (
                        <div key={i}>
                            <select >
                                <option>Select Feature</option>
                                {featureOptions}
                            </select>
                            <button className={styles.remove} onClick={e => this.props.removeFeature(e, i)}>Remove Feature</button>
                        </div>
                    )
                }
            })
        }
    }

    updateCatFeatures(category) {
        const catFeatures = features[category]
        this.setState({ catFeatures})
        this.props.handleCategory(category)
    }

    render() {
        const id = this.props.id

        const catOptions = categories.map((c, i) => {
            if (c === this.props.category) {
                return <option key={i} selected={true}>{c}</option>
            }
            return <option key={i} >{c}</option>
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
                    {catOptions}
                </select>
                <p>Features</p>
                {features}
                <button className={styles.addFeat} onClick={e => this.props.addFeature(e)}>Add Another Feature</button>
            </fieldset>
        )
    }
}