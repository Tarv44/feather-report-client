import React, {Component} from 'react';
import styles from './Admin.module.css';
import ProductContext from '../productContext';
import EditProduct from '../EditProduct/EditProduct';
import ProductsSection from '../ProductsSection/ProductsSection';
import { NavLink } from 'react-router-dom';
import config from '../config';

const { API_ENDPOINT } = config

export default class Admin extends Component {
    static contextType = ProductContext;

    state = {
        company: {},
        categories: [],
        products: []
    }

    componentDidMount() {
        const co_path = this.context.company.pathname

        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }

        if (co_path !== undefined) {
            fetch(`${API_ENDPOINT}/companies/${co_path}/products`,options)
                .then(res => {
                    if (!res.ok) {
                        return res.json().then(err => { throw err })
                    }
                    return res.json()
                })
                .then(res => {
                    const { company, categories, products } = res
                    this.setState({ company, categories, products})
                })
        }
    }

    addProduct = (product) => {
        const products = this.state.products
        products.unshift(product)
        this.setState(products)
    }

    updateProduct = (product) => {
        const products = this.state.products
        const i = products.findIndex(p => p.id === product.id)
        products[i] = product
        this.setState({ products })
    }

    updateCats = (cat) => {
        const categories = this.state.categories
        categories.push(cat)
        this.setState({ categories })
    }

    render() {
        return this.context.company.title 
        ? (
            <>
                <header className={styles.header}>
                    <h1>{this.context.company.title}</h1>
                    <h3>Admin Page</h3>
                    <NavLink 
                        className={styles.customer} 
                        to={`/co/${this.context.company.pathname}/products`}
                    >
                        Customer Page
                    </NavLink>
                </header>
                <main className={styles.main}>
                    <section className={styles.edit}>
                        <EditProduct
                            allCats={this.state.categories} 
                            addProduct={this.addProduct}
                            handleCats={this.updateCats}
                        />
                    </section>
                    <ProductsSection
                        products={this.state.products}
                        updateProduct={this.updateProduct}
                        allCats={this.state.categories}
                        handleCats={this.updateCats}
                        type='edit'
                    />
                </main>
            </>
        )
        : (
            <main>
                <h2>Log in to use Admin page.</h2>
                <NavLink to={'/login'}>Log In</NavLink>
            </main>
        )
    }
}