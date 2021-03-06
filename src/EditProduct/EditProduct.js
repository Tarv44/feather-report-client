import React, {Component} from 'react';
import styles from './EditProduct.module.css';
import EditFeatures from '../EditFeatures/EditFeatures';

export default class EditProduct extends Component {
    static defaultProps = {
        product: {
            title: '',
            price: 0,
            description: '',
            category: 'Select Category',
            features: [],
            link: '',
            id:''
        }
    }

    state = {
        title: this.props.product.title,
        price: this.props.product.price,
        description: this.props.product.description,
        category: this.props.product.category,
        features: this.props.product.features,
        link: this.props.product.link,
        id: this.props.product.id
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

    updateCategory(category) {
        this.setState({ category })
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
        features.push({message: '', id: ''})
        this.setState({ features })
    }

    render() {
        const id = this.state.id

        return (
            <form className={styles.productForm}>
                <h2>Edit Product</h2>
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
                />
            </form>
        )
    }
}