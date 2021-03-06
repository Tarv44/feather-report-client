import React, {Component} from 'react';
import styles from './ProductAction.module.css';

export default class ProductAction extends Component {
    static defaultProps = {
        handleForm: () => {console.log('Error: Set handleForm.')}
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
            return (
                <button
                    className={`${styles.button } ${styles.select}`}
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