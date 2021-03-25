import React, {Component} from 'react';
import styles from './CatSelector.module.css';

export default class CatSelector extends Component {
    render() {
        const catButtons = this.props.categories.map((c, i) => {
            return (
                <button 
                    id={c.id === this.props.catFilter ? styles.filter : null} 
                    onClick={e => this.props.handleFilter(c.id)} 
                    key={i}
                >
                    {c.title}
                </button>
            )
        })

        return (
            <section className={styles.section}>
                <h2>Categories</h2>
                <div className={styles.buttons}>
                    {catButtons}
                    <button onClick={e => this.props.handleFilter('')}>All Categories</button>
                </div>
            </section>
        )
    }
}