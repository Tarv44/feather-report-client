import React, {Component} from 'react';
import styles from './Admin.module.css';
import ProductContext from '../productContext';
import EditProduct from '../EditProduct/EditProduct';
import ProductsSection from '../ProductsSection/ProductsSection';
import { prodWithFeat } from '../dummy-store';
import { NavLink } from 'react-router-dom';
import config from '../config';

const { API_ENDPOINT } = config

export default class Admin extends Component {
    static contextType = ProductContext;

    state = {
        products: prodWithFeat
    }

    componentDidMount() {
        const co_path = this.props.match.params.co_path

        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }

        fetch(`${API_ENDPOINT}/companies/${co_path}/products`,options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(err => { throw err })
                }
                return res.json()
            })
            .then(res => {
                const { company, categories, products } = res
                this.setState({ company, categories, products })
            })
    }

    addProduct = (e, product) => {
        e.preventDefault()
        product.id = 99
        const products = this.state.products
        products.unshift(product)
        this.setState(products)
    }

    updateProduct = (product) => {
        console.log('Update running')
        const products = this.state.products
        const i = products.findIndex(p => p.id === product.id)
        products[i] = product
        this.setState({ products })
    }

    render() {
        return (
            <>
                <header className={styles.header}>
                    <h1>{this.context.company.name}</h1>
                    <h3>Admin Page</h3>
                    <NavLink 
                        className={styles.customer} 
                        to={`/co/${this.context.company.path}/products`}
                    >
                        Customer Page
                    </NavLink>
                </header>
                <main>
                    <section>
                        <EditProduct addProduct={this.addProduct}/>
                    </section>
                    <ProductsSection 
                        products={this.state.products}
                        updateProduct={this.updateProduct}
                        type='edit'
                    />
                </main>
            </>
        )
    }
}