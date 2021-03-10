import React, { Component } from 'react';
import styles from './Product.module.css';
import ProductAction from '../ProductAction/ProductAction';
import EditProduct from '../EditProduct/EditProduct';

export default class Product extends Component {
    state = {
        type: this.props.type,
        editing: false,
        selected: false
    }

    displayEdit = (e) => {
        e.preventDefault()
        this.setState({ editing: true })
    }

    toggleSelected = () => {
        this.setState({ selected: !this.state.selected })
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
                if (f === undefined) {
                    return <li key={i}>Loading...</li>
                }
                return <li key={i}>{f.message}</li>
            })

        
        const action = this.state.type === 'edit'
            ? <ProductAction 
                handleForm={this.displayEdit} 
                type={this.state.type} 
            />
            : this.state.type === 'select'
            ? <ProductAction 
                handleSelected={this.props.handleSelected}
                product={product}
                selected={this.state.selected} 
                type={this.state.type} 
            />
            : <ProductAction 
                type={this.state.type} 
            />

        return this.state.editing 
            ? <EditProduct product={product}/>
            : (
                <div className={styles.product}>
                    <div className={styles.content}>
                        <h2>{product.title}</h2>
                        <p>${product.price}</p>
                    </div>
                    
                    <p>{product.description}</p>
                    <div className={styles.content}>
                        <ul>
                            {features}
                        </ul>
                        {action}
                    </div>
                </div>
            )
    }
}