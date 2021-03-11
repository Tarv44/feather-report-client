import React, {Component} from 'react';
import styles from './ProductsSection.module.css';
import Product from '../Product/Product';

export default class ProductsSection extends Component {
    render() {
        const productDivs = this.props.catFilter 
            ? this.props.products.filter(p => p.category === this.props.catFilter)
                .map((p, i) => {
                    return <Product 
                        productData={p} 
                        key={i}
                        type={this.props.type}
                        handleSelected={this.props.handleSelected}
                        updateProduct={this.props.updateProduct} 
                    />
                })
            : this.props.products.map((p, i) => {
                return <Product 
                    productData={p} 
                    key={i} 
                    type={this.props.type}
                    handleSelected={this.props.handleSelected}
                    updateProduct={this.props.updateProduct} 
                />
            })

        return (
            <section className={styles.section}>
                {productDivs}
            </section>
        )
    }
}