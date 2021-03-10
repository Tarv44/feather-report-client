import React, { Component } from 'react';
import styles from './Compare.module.css';
import ProductContext from '../productContext';
import Product from '../Product/Product';

export default class Compare extends Component {
    static contextType = ProductContext;

    setAllFeatures() {
        
        let allFeatures = []

        this.context.selected.forEach(p => {
            allFeatures = allFeatures.concat(p.features)
        })
        allFeatures = allFeatures.reduce((acc, current) => {
            const x = acc.find(item => item.id === current.id);
            if (!x) {
              return acc.concat([current]);
            } else {
              return acc;
            }
        }, []);
        return allFeatures
    }

    render() {
        const allFeatures = this.setAllFeatures();

        const products = this.context.selected.map((p, i) => {
            return (
                <Product 
                    type='compare'
                    productData={p}
                    allFeatures={allFeatures}
                    key={i}
                />
            )
        })
        return (
            <>
                <header>
                    <h1>Compare</h1>
                </header>
                <main className={styles.main}>
                    {products}
                </main>
            </>
        )
    }
}