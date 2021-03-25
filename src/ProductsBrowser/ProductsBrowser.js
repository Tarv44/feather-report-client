import React, {Component} from 'react';
import styles from './ProductsBrowser.module.css';
import ProductContext from '../productContext';
import CatSelector from '../CatSelector/CatSelector';
import ProductsSection from '../ProductsSection/ProductsSection';
import { NavLink } from 'react-router-dom';
import config from '../config';

const { API_ENDPOINT } = config

export default class ProductsBrowser extends Component {
    state = {
        company: {},
        categories: [],
        catFilter: '',
        products: []
    }

    static contextType = ProductContext

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
                const { company, categories } = res

                const products = res.products.map(p => {
                    const isSelected = this.context.selected.findIndex(s => s.id === p.id) > -1
                    if (isSelected) {
                        p.selected = true
                    } else {
                        p.selected = false
                    }
                    return p
                })

                this.setState({ company, categories, products })
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
                    <h1>{this.state.company.title}</h1>
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
                    <NavLink className={styles.float} onClick={e => this.handlePath()} to={'/compare'}>
                        <p className={styles.click}>Click to</p>
                        <p className={styles.compare}>Compare</p>
                        <p className={styles.count}>{this.context.selected.length}/4</p>
                    </NavLink>
                </main>
            </main>
        )
    }
}
