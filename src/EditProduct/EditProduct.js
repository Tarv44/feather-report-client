import React, {Component} from 'react';
import styles from './EditProduct.module.css';
import EditFeatures from '../EditFeatures/EditFeatures';
import config from '../config';
import ProductContext from '../productContext';

export default class EditProduct extends Component {
    static contextType = ProductContext

    static defaultProps = {
        product: {
            title: '',
            price: 0,
            description: '',
            category: null,
            features: [],
            link: '',
            id: null,
            allCats: []
        }
    }

    constructor(props) {
        super(props)

        const catSelected = props.allCats.findIndex(c => c.id === props.product.category) > -1
        const category = catSelected
            ? this.props.allCats.find(c => c.id === props.product.category)
            : {
                title: 'Select Category',
                id: null
            }

        this.state = {
            title: this.props.product.title,
            price: this.props.product.price,
            description: this.props.product.description,
            category: category,
            features: this.props.product.features,
            link: this.props.product.link,
            id: this.props.product.id
        }
    }
    

    updateTitle(title) {
        this.setState({ title })
    }

    updatePrice(price) {
        this.setState({ price })
    }

    updateDescription(description) {
        this.setState({ description })
    }

    updateLink(link) {
        this.setState({ link })
    }

    updateCategory = (category) => {
        this.setState({ 
            category,
            features: [{title: ""}]  
        })
    }

    updateFeature = (f, i) => {
        const features = this.state.features
        features[i] = f
        this.setState({ features })
    }
    
    removeFeature = (e, i) => {
        e.preventDefault()
        const features = this.state.features
        features.splice(i, 1)
        this.setState({ features })
    }

    addFeature = (e) => {
        e.preventDefault()
        const features = this.state.features
        features.push({message: 'Select Feature'})
        this.setState({ features })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const body = this.state
        body.features = this.state.features.map(f => { return f.id })
        body.company = this.context.company.id
        body.category = this.state.category.id

        const headers = {
            'content-type': 'application/json'
        }
        
        const method = this.state.id === null ? 'POST' : 'PATCH'

        const options = {
            method,
            headers,
            body: JSON.stringify(body)
        }

        fetch(`${config.API_ENDPOINT}/products/`, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(err => { throw err })
                }
                return res.json()
            })
            .then(p => {
                if (this.state.id === null) {
                    this.props.addProduct(p)
                    this.setState({
                        title: '',
                        price: 0,
                        description: '',
                        category: {
                            title: '',
                            id: null
                        },
                        features: [],
                        link: '',
                        id: null
                    })
                } else {
                    this.props.updateProduct(p)
                }
            })
    }

    handleCats = (category) => {
        this.setState({ 
            category,
            features: [{
                title: '',
                id: null
            }] 
        })
        this.props.handleCats(category)
    }

    render() {
        const id = this.state.id
        const Submit = this.state.id === null
            ? <button className={styles.submit} onClick={e => this.handleSubmit(e)}>Add Product</button>
            : <button className={styles.submit} onClick={e => this.handleSubmit(e)}>Update Product</button>

        return (
            <form className={styles.form}>
                <h2>{this.state.id === null ? 'Add Product' : 'Edit Product'}</h2>
                <fieldset>
                    <legend>Details</legend>
                    <label htmlFor={`productTitle-${id}`}>Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        id={`productTitle-${id}`}
                        value={this.state.title}
                        onChange={e => this.updateTitle(e.target.value)} 
                    />
                    <label htmlFor={`productPrice-${id}`}>Price</label>
                    <input 
                        type="text" 
                        name="price" 
                        id={`productPrice-${id}`}
                        value={this.state.price}
                        onChange={e => this.updatePrice(e.target.value)} 
                    />
                    <label htmlFor={`productDescr-${id}`}>Description</label>
                    <textarea
                        name="description" 
                        id={`productDescr-${id}`}
                        value={this.state.description}
                        rows={5}
                        onChange={e => this.updateDescription(e.target.value)} 
                    />
                    <label htmlFor={`productLink-${id}`}>Buy Online Link</label>
                    <input
                        name="link"
                        type="text" 
                        id={`productLink-${id}`}
                        value={this.state.link}
                        onChange={e => this.updateLink(e.target.value)} 
                    />
                </fieldset>
                <EditFeatures 
                    category={this.state.category}
                    features={this.state.features}
                    id={id}
                    handleCategory={this.updateCategory}
                    removeFeature={this.removeFeature}
                    addFeature={this.addFeature}
                    updateProdFeatures={this.updateFeature}
                    allCats={this.props.allCats}
                    handleCats={this.handleCats}
                />
                {Submit}
            </form>
        )
    }
}