import React, {Component} from 'react';
import ProductContext from '../productContext';
import styles from './EditFeatures.module.css';
import { features, categories } from '../dummy-store';
import Feature from '../Feature/Feature';
import config from '../config';

const { API_ENDPOINT } = config

export default class EditFeatures extends Component {
    static contextType = ProductContext;

    state = {
        catFeatures: []
    }

    componentDidMount() {
        const cat = this.props.category
        if ( cat === 'Select Category' ) {
            this.setState({ catFeatures: [] })
        } else {
            const options = {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            }

            fetch(`${API_ENDPOINT}/categories/${cat}/features`, options)
                .then(res => {
                    if (!res.ok) {
                        return res.json().then(err => { throw err })
                    }
                    return res.json()
                })
                .then(res => {
                    this.setState({catFeatures: res})
                })
        }
        
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
                    selected={f.title}
                    updateFeature={this.props.updateFeature}
                    submitFeature={this.submitFeature}
                    removeFeature={this.props.removeFeature}
                />
            )
        })

        return (
            <fieldset>
                <legend>Category and Features</legend>
                <h3 className={styles.label}>Category</h3>
                <select 
                    id={`productCats-${id}`} 
                    onChange={e => this.updateCatFeatures(e.target.value)}
                    value={this.props.category}
                >
                    <option>Select Category</option>
                    {catOptions}
                </select>
                <h3 className={styles.label}>Features</h3>
                {this.props.category === 'Select Category' 
                    ? <p><i>Select a category to see features.</i></p>
                    : FeatureComponents}
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