import React, { Component } from 'react';
import styles from './Signup.module.css';
import { NavLink } from 'react-router-dom';
import ValidationError from '../ValidationError';
import ProductContext from '../productContext';
import config from '../config';


export default class Signup extends Component {
    static contextType = ProductContext

    state = {
        // signup_submitted: false,
        title: {
            value: '',
            touched: false
        },
        pathname: {
            value: '',
            touched: false
        },
        email: {
            value: '',
            touched: false
        },
        password: {
            value: '',
            touched: false
        },
        confirmPassword: {
            value: '',
            touched: false
        },
        error: {
            message: '',
            failed: false
        }
    }

    updateTitle(title) {
        this.setState({
            title: {
                value: title,
                touched: true
            }
        })
    }

    updatePathname(pathname) {
        this.setState({
            pathname: {
                value: pathname,
                touched: true
            }
        })
    }

    updateEmail(email) {
        this.setState({
            email: {
                value: email,
                touched: true
            }
        })
    }

    updatePassword(password) {
        this.setState({
            password: {
                value: password,
                touched: true
            }
        })
    }

    updateConfirmPassword(confirmPassword) {
        this.setState({
            confirmPassword: {
                value: confirmPassword,
                touched: true
            }
        })
    }

    validateTitle() {
        const title = this.state.title.value.trim();
        if (title.length === 0) {
          return 'Title is required';
        }
    }

    validatePathname() {
        const pathname = this.state.pathname.value.trim();
        if (pathname.length === 0) {
          return 'Pathname is required';
        }
    }

    validateEmail() {
        const email = this.state.email.value.trim();
        const pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
        if(!pattern.test(email)) {
            return 'Invalid Email'
        }
    }

    validatePassword() {
        const password = this.state.password.value.trim();
        if (password.length === 0) {
          return 'Password is required';
        } else if (password.length < 6 || password.length > 72) {
          return 'Password must be between 6 and 72 characters long';
        } else if (!password.match(/[0-9]/)) {
          return 'Password must contain at least one number';
        }
    }

    validateConfirmPassword() {
        const password = this.state.password.value.trim()
        const confirmPassword = this.state.confirmPassword.value.trim()

        if (password !== confirmPassword) {
            return 'Passwords do not match.'
        }
    }

    disableSubmit() {
        if (
            this.validateTitle()
            || this.validateConfirmPassword()
            || this.validatePathname()
            || this.validateEmail()
            || this.validatePassword()
        ) {
            return true
        } else {
            return false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        // this.setState({ signup_submitted: true })

        const headers = {
            'content-type': 'application/json'
        }

        const body = {
            title: this.state.title.value,
            email: this.state.email.value,
            pathname: this.state.pathname.value,
            password: this.state.password.value,
        }

        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        }

        fetch(`${config.API_ENDPOINT}/companies/`, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(err => { throw err })
                }
                return res.json()
            })
            .then(comp => {
                this.context.handleCompany( comp ) 
                this.setState({
                    title: {
                        value: '',
                        touched: false
                    },
                    pathname: {
                        value: '',
                        touched: false
                    },
                    email: {
                        value: '',
                        touched: false
                    },
                    password: {
                        value: '',
                        touched: false
                    },
                    confirmPassword: {
                        value: '',
                        touched: false
                    }
                })
                if (this.context.return_path) {
                    this.props.history.push(this.context.return_path)
                    this.context.resetReturnPath()
                } else {
                    this.props.history.push(`/co/${comp.pathname}/admin`)
                }
            })
            .catch(err => {
                this.setState({
                    error: {
                        message: err.error.message,
                        failed: true
                    }
                })
            })
    }

    render() {
        return (
            <main className="signup-login">
                <form autoComplete='off' className='signup-form' onSubmit={e => this.handleSubmit(e)}>
                    <h2>Signup</h2>
                    {this.state.error.failed && <p className='error'>{this.state.error.message}</p>}
                    <div className='form-group'>
                        <label htmlFor='title'>Business Name</label>
                        <input type='text' name='title' id='title' onChange={e => this.updateTitle(e.target.value)}/>
                        {this.state.title.touched && <ValidationError message={this.validateTitle()}/>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pathname'>URL Pathname</label>
                        <input type='text' name='pathname' id='pathname' onChange={e => this.updatePathname(e.target.value)}/>
                        {this.state.pathname.touched
                        && <p>
                            Ex: www.FeatherReport.biz/co/{this.state.pathname.value}/products
                        </p>}
                        {this.state.pathname.touched && <ValidationError message={this.validatePathname()}/>}
                    </div>
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
                    <div className='form-group'>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input type='password' name='confirmPassword' id='confirmPassword' onChange={e => this.updateConfirmPassword(e.target.value)}/>
                        {this.state.confirmPassword.touched && <ValidationError message={this.validateConfirmPassword()}/>}
                    </div>
                    <button disabled={this.disableSubmit()} type='submit'>Signup</button>
                    <p>Already have an account?</p>
                    <NavLink className="login-here" to={'/login'}>Login here.</NavLink>
                </form>
            </main>
        )
    }
}