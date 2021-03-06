import React, { Component } from 'react';
import styles from './Product.module.css';
import ProductAction from '../ProductAction/ProductAction';
import EditProduct from '../EditProduct/EditProduct';

export default class Product extends Component {
    state = {
        type: this.props.type,
        editing: false
    }

    displayEdit = (e) => {
        e.preventDefault()
        this.setState({ editing: true })
    }

    render() {
        const product = this.props.productData

        const features = this.state.type === 'compare'
            ? this.props.allFeatures.map((f, i) => {
                for (let l = 0; l < product.features.length; l++) {
                    if (product.features[l].id === f.id) {
                        return <li key={i} id={f.id}>{f.message}</li>
                    }
                }
                return <li key={i} id={f.id} className={styles.notFeatured}>{f.message}</li>
            })
            : product.features.map((f, i) => {
            return <li key={i} id={f.id}>{f.message}</li>
        })

        
        const action = this.state.type === 'edit'
            ? <ProductAction handleForm={this.displayEdit} type={this.state.type} />
            : <ProductAction type={this.state.type} />

        return this.state.editing 
            ? <EditProduct product={product}/>
            : (
                <div className={styles.product}>
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
                    <p>{product.description}</p>
                    <ul>
                        {features}
                    </ul>
                    {action}
                </div>
            )
    }
}