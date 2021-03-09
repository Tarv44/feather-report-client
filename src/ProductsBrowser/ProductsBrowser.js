import React, {Component} from 'react';
import styles from './ProductsBrowser.module.css';
import ProductContext from '../productContext';
import {companies, categories, prodWithFeat} from '../dummy-store';
import Product from '../Product/Product';
import CatSelector from '../CatSelector/CatSelector';
import ProductsSection from '../ProductsSection/ProductsSection';

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

        this.setState({ 
            company: companies[companyNameId],
            categories,
            products: prodWithFeat
        })
    }

    updateCatFilter = (catFilter) => {
        this.setState({ catFilter })
    }

    render() {
        return (
            <main>
                <header>
                    <h1>{this.state.company.name}</h1>
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
                    /> 
                </main>
            </main>
        )
    }
}
