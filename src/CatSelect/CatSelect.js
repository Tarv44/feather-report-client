import React, {Component} from 'react';
import styles from './CatSelect.module.css';
import config from '../config';
import ProductContext from '../productContext';


export default class CatSelect extends Component {
    static contextType = ProductContext

    state = {
        newCategory: '',
        creatingNew: false
    }

    updateCreatingNew = (e) => {
        e.preventDefault();
        this.setState({ creatingNew: true })
    }

    updateCat = (newCategory) => {
        this.setState({ newCategory })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const headers = {
            'content-type': 'application/json'
        }

        const body = {
            title: this.state.newCategory,
            company: this.context.company.id
        }

        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        }

        fetch(`${config.API_ENDPOINT}/categories/`, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(err => { throw err })
                }
                return res.json()
            })
            .then(feat => {
                this.props.handleNewCat(feat, this.props.index)
                this.setState({ creatingNew: false })
            })
    }

    render() {
        return this.state.creatingNew
        ? (
            <div className={styles.category}>
                <input 
                    onChange={e => this.updateCat(e.target.value, this.props.index)} 
                    type='text' 
                />
                <button 
                    className={styles.button} 
                    onClick={e => this.handleSubmit(e)}
                >
                    Submit Feature
                </button>
            </div>
        )
        : (
            <div className={styles.category}>
                <select 
                    onChange={e => this.props.handleCategory(e.target.value)}
                    value={this.props.category}
                >
                    <option>Select Category</option>
                    {this.props.catOptions}
                </select>
                <button
                    className={styles.button}
                    onClick={e => this.updateCreatingNew(e)}
                >
                    Create New Category
                </button>
            </div>
        )
    }
}