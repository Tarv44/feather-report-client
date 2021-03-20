import React, {Component} from 'react';
import styles from './EditProduct.module.css';
import EditFeatures from '../EditFeatures/EditFeatures';

export default class EditProduct extends Component {
    static defaultProps = {
        product: {
            title: '',
            price: 0,
            description: '',
            category: -1,
            features: [],
            link: '',
            id: null,
            allCats: []
        }
    }

    constructor(props) {
        super(props)
        const catSelected = props.allCats.findIndex(c => c.id == props.product.category) > -1
        console.log(props.allCats)
        const category = catSelected
            ? this.props.allCats.find(c => c.id === props.product.category)
            : 'Select Category'
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
        features[i].message = f
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

    render() {
        const id = this.state.id
        const Submit = this.state.id === null
            ? <button className={styles.submit} onClick={e => this.props.addProduct(e, this.state)}>Add Product</button>
            : <button className={styles.submit} onClick={e => this.props.updateProduct(e, this.state)}>Update Product</button>

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
                    updateFeature={this.updateFeature}
                    allCats={this.props.allCats}
                />
                {Submit}
            </form>
        )
    }
}