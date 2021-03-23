import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import ValidationError from '../ValidationError';
import ProductContext from '../productContext';
import config from '../config';

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

    handleSubmit(e) {
        e.preventDefault()
        
        const headers = {
            'content-type': 'application/json'
        }

        const body = {
            email: this.state.email.value,
            password: this.state.password.value,
        }

        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        }

        fetch(`${config.API_ENDPOINT}/companies/login`, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(err => { throw err })
                }
                return res.json()
            })
            .then(comp => {
                this.context.handleCompany(comp)
                this.props.history.push(`/co/${comp.pathname}/admin`)
            })
    }

    render() {
        return (
            <main className="signup-login">
                <form autoComplete='off' className='login-form' onSubmit={e => this.handleSubmit(e)}>
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
                    <p>Don't have an account?</p>
                    <NavLink className="login-here" to={'/signup'}>Signup here.</NavLink>
                </form>
            </main>
        )
    }
}