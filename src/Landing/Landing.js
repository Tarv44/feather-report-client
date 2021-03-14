import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Landing.module.css'

export default class Landing extends Component {
    render() {
        return (
            <main>
                <header>
                    <h1>Feather Report</h1>
                </header>

                <section>
                    <h2>Intro</h2>
                    <p>
                        Looking to show off what makes each of your amazing products special? 
                        Feather report is a platform that businesses can use to give their customers
                        an easy-to-use process for comparing and contrasting the features of each 
                        of their products.
                    </p>
                    <p>
                        Why "Feather Report"? The goal is to provide customers the option to compare 
                        products "of a different feather" while keeping the process focused on just 
                        the important details or, in other words, making the report "light as a feather."
                    </p>
                </section>

                <section>
                    <h2>Get Started</h2>
                    <p>
                        This is currently a static version for proving and testing the basic functionality
                        of this service.
                    </p>
                    <p>
                        To use this version as a business admin would to manage their products, select
                        login and use the demo account:
                    </p>
                    <ul>
                        <li>Email: "sids@email.com"</li>
                        <li>Password: "1234"</li>
                    </ul>
                    <NavLink className={styles.button} to={'/login'}>
                        Login
                    </NavLink>

                    <p>
                        To use this version as if you were a customer trying to browse 
                        and compare products, select "Sid's Kitchen Stuff" to go directly
                        to the product page.
                    </p>
                    <NavLink className={styles.button}to={'/co/Sids/products'}>
                        Sid's Kitchen Stuff
                    </NavLink>
                </section>
            </main>
        )
    }
}