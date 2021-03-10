import React, {Component} from 'react';
import styles from './Admin.module.css';
import ProductContext from '../productContext';
import EditProduct from '../EditProduct/EditProduct';
import ProductsSection from '../ProductsSection/ProductsSection';
import { prodWithFeat } from '../dummy-store';

export default class Admin extends Component {
    static contextType = ProductContext;

    state = {
        products: prodWithFeat
    }

    render() {
        return (
            <>
                <header>
                    <h1>{this.context.company.name}</h1>
                    <h3>Admin Page</h3>
                </header>
                <main>
                    <EditProduct />
                    <ProductsSection 
                        products={this.state.products}
                        type='edit'
                    />
                </main>
            </>
        )
    }
}