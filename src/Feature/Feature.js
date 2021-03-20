import React, { Component } from 'react';
import styles from './Feature.module.css';

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
        this.props.updateCatFeatures(this.state.new_feature)
        this.props.updateProductFeatures(this.state.new_feature, this.props.index)
        this.setState({ creating_new: false })
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
                        onChange={e => this.props.updateFeature(e.target.value, this.props.index)} 
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