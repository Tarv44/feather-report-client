import React, {Component} from 'react';
import styles from './ProductAction.module.css';
import ProductContext from '../productContext';

export default class ProductAction extends Component {
    static defaultProps = {
        handleForm: () => {console.log('Error: Set handleForm.')}
    }

    static contextType = ProductContext

    state = {
        maxReached: false
    }

    onSelect = () => {
        const isSelected = this.props.product.selected
        if (isSelected) {
            this.props.handleSelected(this.props.product.id)
            this.context.handleSelected('remove', this.props.product)
        } else {
            if (this.context.selected.length < 4) {
                this.props.handleSelected(this.props.product.id)
                this.context.handleSelected('add', this.props.product)
            } else {
                this.setState({ maxReached: true })
                setTimeout(() => {
                    this.setState({maxReached: false})
                }, 1000)
            }
        }
    }

    setAction() {
        const type = this.props.type
        
        if (type === 'edit') {
            return (
                <button
                    className={`${styles.button }`}
                    onClick={e => this.props.handleForm(e)}
                >
                    Edit Product
                </button>
            )
        }

        if (type === 'select') {
            if (this.props.product.selected) {
                return <button 
                    onClick={e => this.onSelect()}
                    className={`${styles.button } ${styles.selected}`}
                >
                    Selected
                </button>
            }
            return this.state.maxReached 
                ? (
                    <button 
                        className={`${styles.button } ${styles.maxed}`} 
                        disabled={true}
                    >
                            Max Reached
                    </button>
                )
                : (
                    <button
                        className={`${styles.button }`}
                        onClick={e => this.onSelect()}
                    >
                        Select Product
                    </button>
                )
        }

        if (type === 'compare') {
            return (
                <a href={this.props.product.link} target='_blank'>
                    <button
                        className={`${styles.button }`}
                    >
                        Buy Online
                    </button>
                </a>
            )
        }
    }

    render() {
        const action = this.setAction()

        return action
    }
}