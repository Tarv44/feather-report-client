import React, {Component} from 'react';
import ProductContext from '../productContext';
import styles from './EditFeatures.module.css';
import { features, categories } from '../dummy-store';
import Feature from '../Feature/Feature';

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
    

    updateCatFeatures(category) {
        const catFeatures = features[category]
        this.setState({ catFeatures})
        this.props.handleCategory(category)
    }

    submitFeature = (feature) => {
        const catFeatures = this.state.catFeatures
        catFeatures.push({message: feature})
        this.setState({ catFeatures })
    }

    render() {
        const id = this.props.id

        const catOptions = categories.map((c, i) => {
            return <option key={i} >{c}</option>
        })

        const FeatureComponents = this.props.features.map((f, i) => {
            return (
                <Feature
                    features={this.state.catFeatures} 
                    index={i}
                    key={i}
                    selected={f.message}
                    updateFeature={this.props.updateFeature}
                    submitFeature={this.submitFeature}
                    removeFeature={this.props.removeFeature}
                />
            )
        })

        return (
            <fieldset>
                <legend>Category and Features</legend>
                <label htmlFor={`productCats-${id}`}>Category</label>
                <select 
                    id={`productCats-${id}`} 
                    onChange={e => this.updateCatFeatures(e.target.value)}
                    value={this.props.category}
                >
                    <option>Select Category</option>
                    {catOptions}
                </select>
                <p>Features</p>
                {FeatureComponents}
                <button 
                    className={styles.addFeat} 
                    onClick={e => this.props.addFeature(e)}
                >
                    Add Another Feature
                </button>
            </fieldset>
        )
    }
}