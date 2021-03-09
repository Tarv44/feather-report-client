import React, {Component} from 'react';
import styles from './ProductAction.module.css';
import ProductContext from '../productContext';

export default class ProductAction extends Component {
    static defaultProps = {
        handleForm: () => {console.log('Error: Set handleForm.')}
    }

    static contextType = ProductContext

    state = {
        selected: false
    }

    onSelect = () => {
        if (this.state.selected) {
            this.setState({ selected: false })
            this.context.handleSelected('remove', this.props.product)
        } else {
            if (this.context.selected.length < 4) {
                this.setState({ selected: true })
                this.context.handleSelected('add', this.props.product)
            }
        }
    }

    setDisplay() {
        const type = this.props.type
        if (type === 'edit') {
            return (
                <button
                    className={`${styles.button } ${styles.edit}`}
                    onClick={e => this.props.handleForm(e)}
                >
                    Edit Product
                </button>
            )
        }

        if (type === 'select') {
            if (this.state.selected) {
                return <button 
                    onClick={e => this.onSelect()}
                    className={`${styles.button } ${styles.selected}`}
                >
                    Selected
                </button>
            }
            return (
                <button
                    className={`${styles.button } ${styles.select}`}
                    onClick={e => this.onSelect()}
                >
                    Select Product
                </button>
            )
        }

        if (type === 'compare') {
            return (
                <button
                    className={`${styles.button } ${styles.compare}`}
                >
                    Buy Online
                </button>
            )
        }
    }

    render() {
        const action = this.setDisplay()

        return action
    }
}