import React, { Component } from 'react';
import styles from './Feature.module.css';
import config from '../config';

export default class Feature extends Component {
    static defaultProps = {
        selected: 'Select Feature'
    }

    state = {
        creating_new: false,
        new_feature: ''
    }

    updateCreatingNew(e) {
        e.preventDefault()
        this.setState({ creating_new: true})
    }

    updateFeature(f) {
        this.setState({ new_feature: f })
    }

    submitFeature(e) {
        e.preventDefault()

        const headers = {
            'content-type': 'application/json'
        }

        const body = {
            title: this.state.new_feature,
            category: this.props.category.id
        }

        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        }

        fetch(`${config.API_ENDPOINT}/features/`, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(err => { throw err })
                }
                return res.json()
            })
            .then(feat => {
                this.props.updateCatFeatures(feat, this.props.index)
                this.setState({ creating_new: false })
            })
    }

    updateProdFeature = (title) => {
        const feature = this.props.features.find(f => f.title == title)
        this.props.updateProdFeatures(feature, this.props.index)
    }

    render() {
        const FeatureOptions = this.props.features.map((f, i) => {
            return <option key={i}>{f.title}</option>
        })

        const Feature = this.state.creating_new
            ? (
                <div className={styles.feature}>
                    <input 
                        onChange={e => this.updateFeature(e.target.value, this.props.index)} 
                        type='text' 
                    />
                    <button 
                        className={styles.create} 
                        onClick={e => this.submitFeature(e, e.target.value)}
                    >
                        Submit Feature
                    </button>
                    <button 
                        onClick={e => this.props.removeFeature(e, this.props.index)}
                    >
                        Remove Feature
                    </button>
                </div>
            )
            : (
                <div className={styles.feature}>
                    <select 
                        value={this.props.selected}
                        onChange={e => this.updateProdFeature(e.target.value)} 
                    >
                        <option>Select Feature</option>
                        {FeatureOptions}
                    </select>
                    <button 
                        className={styles.create} 
                        onClick={e => this.updateCreatingNew(e)}
                    >
                        Create New Feature
                    </button>
                    <button 
                        onClick={e => this.props.removeFeature(e, this.props.index)}
                    >
                        Remove Feature
                    </button>
                </div>
            )

        return Feature
    }
}