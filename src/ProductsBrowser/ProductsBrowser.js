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
        const companyNameId = this.props.match.params.co_path

        const products = prodWithFeat.map(p => {
            const isSelected = this.context.selected.findIndex(s => s.id === p.id) >= 0
            if (isSelected) {
                p.selected = true
            } else {
                p.selected = false
            }
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

    handlePath = () => {
        const path  = this.props.location.pathname
        this.context.handleBrowserPath(path)
    }

    render() {
        return (
            <main>
                <header>
                    <h1>{this.state.company.name}</h1>
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
                    <div className={styles.float}>
                        <p>{this.context.selected.length}/4</p>
                        <NavLink onClick={e => this.handlePath()} to={'/compare'}>
                            <button>Compare</button>
                        </NavLink>
                    </div>
                </main>
            </main>
        )
    }
}
