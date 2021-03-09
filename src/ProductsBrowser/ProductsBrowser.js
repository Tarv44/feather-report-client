import React, {Component} from 'react';
import styles from './ProductsBrowser.module.css';
import ProductContext from '../productContext';
import {companies, categories, prodWithFeat} from '../dummy-store';
import CatSelector from '../CatSelector/CatSelector';
import ProductsSection from '../ProductsSection/ProductsSection';
import { NavLink } from 'react-router-dom';

export default class ProductsBrowser extends Component {
    state = {
        company: {},
        categories: [],
        catFilter: '',
        products: []
    }

    static contextType = ProductContext

    componentDidMount() {
        const companyNameId = this.props.match.params.co_name

        const products = prodWithFeat.map(p => {
            p.selected = false
            return p
        })

        this.setState({ 
            company: companies[companyNameId],
            categories,
            products
        })
    }

    updateCatFilter = (catFilter) => {
        this.setState({ catFilter })
    }

    updateSelected = (id) => {
        const index = this.state.products.findIndex(p => p.id === id)
        const products = this.state.products
        products[index].selected = !products[index].selected
        this.setState({ products })
    }

    render() {
        return (
            <main>
                <header>
                    <h1>{this.state.company.name}</h1>
                    <NavLink to={'/compare'}>Compare</NavLink>
                    <p>Selected: {this.context.selected.length}/4</p>
                </header>
                <main className={styles.browser_main}>
                    <CatSelector 
                        categories={this.state.categories}
                        handleFilter={this.updateCatFilter}
                    />
                    <ProductsSection 
                        products={this.state.products} 
                        type={'select'}
                        catFilter={this.state.catFilter}
                        handleSelected={this.updateSelected} 
                    /> 
                </main>
            </main>
        )
    }
}
