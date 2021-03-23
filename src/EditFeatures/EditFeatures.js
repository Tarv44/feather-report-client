import React, {Component} from 'react';
import ProductContext from '../productContext';
import styles from './EditFeatures.module.css';
import Feature from '../Feature/Feature';
import config from '../config';
import CatSelect from '../CatSelect/CatSelect';

const { API_ENDPOINT } = config

export default class EditFeatures extends Component {
    static contextType = ProductContext;

    state = {
        catFeatures: []
    }

    componentDidMount() {
        const cat = this.props.category
        if ( cat.id === null ) {
            this.setState({ catFeatures: [] })
        } else {
            this.fetchFeatures(this.props.category)
        }
        
    }

    fetchFeatures = (cat) => {
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }

        fetch(`${API_ENDPOINT}/categories/${cat.id}/features`, options)
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

    handleCategory = (catTitle) => {
        const cat = this.props.allCats.find(c => c.title === catTitle)
        this.props.handleCategory(cat)
        this.fetchFeatures(cat)
    }


    updateCatFeatures = (feature, index) => {
        const catFeatures = this.state.catFeatures
        catFeatures.push(feature)
        this.setState({ catFeatures })
        this.props.updateProdFeatures(feature, index)
    }

    handleNewCat = (cat) => {
        this.fetchFeatures(cat)
        this.props.handleCats(cat)
    }

    render() {
        const catOptions = this.props.allCats.map((c, i) => {
            return <option id={c.id} key={i} >{c.title}</option>
        })

        const FeatureComponents = this.props.features.map((f, i) => {
            return (
                <Feature
                    features={this.state.catFeatures} 
                    index={i}
                    key={i}
                    selected={f.title}
                    category={this.props.category}
                    updateCatFeatures={this.updateCatFeatures}
                    updateProdFeatures={this.props.updateProdFeatures}
                    removeFeature={this.props.removeFeature}
                />
            )
        })

        return (
            <fieldset>
                <legend>Category and Features</legend>
                <h3 className={styles.label}>Category</h3>
                <CatSelect 
                    handleCategory={this.handleCategory}
                    category={this.props.category.title}
                    catOptions={catOptions}
                    handleNewCat={this.handleNewCat}
                />
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