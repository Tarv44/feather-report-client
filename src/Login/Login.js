import React, {Component} from 'react';
// import styles from './Login.module.css';
// import { NavLink } from 'react-router-dom';
import ValidationError from '../ValidationError';
import ProductContext from '../productContext';

export default class Login extends Component {
    static contextType = ProductContext;

    constructor(props) {
        super(props)
        this.state = {
            login_submitted: false,
            error: {
                message: '',
                failed: false
            },
            email: {
                value: '',
                touched: false
            },
            password: {
                value: '',
                touched: false
            }
        }
    }

    updateEmail(email) {
        this.setState({ email: { value: email, touched: true } })
    }

    updatePassword(password) {
        this.setState({ password: { value: password, touched: true } })
    }

    validateEmail() {
        const email = this.state.email.value.trim()
        if (email.length === 0) {
            return 'Email is required'
        } 
    }

    validatePassword() {
        const password = this.state.password.value.trim()
        if (password.length === 0) {
            return 'Password is required'
        } 
    }

    handleLoginSubmit(e) {
        e.preventDefault()
        const emailCorrect = this.state.email.value.toLowerCase() === 'sids@email.com'
        const passwordCorrect = this.state.password.value.toLowerCase() === '1234'
        if (emailCorrect && passwordCorrect) {
            const company = {
                name: `Sid's Kitchen Stuff`,
                path: `Sids`
            }
            this.context.handleCompany(company)
            this.props.history.push(`/co/${company.path}/admin`)
        }
    }

    render() {
        return (
            <main className="signup-login">
                <form autoComplete='off' className='login-form' onSubmit={e => this.handleLoginSubmit(e)}>
                    <h2>Login</h2>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email' id='email' onChange={e => this.updateEmail(e.target.value)}/>
                        {this.state.email.touched && <ValidationError message={this.validateEmail()}/>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' id='password' onChange={e => this.updatePassword(e.target.value)}/>
                        {this.state.password.touched && <ValidationError message={this.validatePassword()}/>}
                    </div>
                    <button type='submit'>Login</button>
                    {/* {this.state.error.failed && <p className='error'>{this.state.error.message}</p>} */}
                    {/* <p>Don't have an account?</p>
                    <NavLink className="login-here" to={'/signup'}>Signup here.</NavLink> */}
                </form>
            </main>
        )
    }
}