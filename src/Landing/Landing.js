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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus faucibus blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur euismod mi ac vulputate luctus. Cras efficitur luctus elit eget accumsan. Mauris sit amet eros consectetur eros ultricies imperdiet a ut risus. Curabitur tempus nisl eu risus accumsan vestibulum. Morbi euismod magna sit amet enim laoreet tincidunt. Nulla ante lacus, commodo nec laoreet sit amet, elementum quis sapien. Donec rutrum finibus felis.</p>
                </section>

                <section>
                    <h2>Get Started</h2>
                    <p>Quisque quis viverra velit. Nulla in elit et felis posuere condimentum. Mauris egestas massa vel massa volutpat, fringilla venenatis mauris auctor. Pellentesque iaculis, dui ac pellentesque tincidunt, justo ante fringilla nisl, id posuere massa metus ut felis. Integer et erat vulputate, dignissim massa et, dictum mi. Duis non elit nibh. Nulla ullamcorper tortor at egestas dapibus. Mauris rhoncus eros ac cursus commodo. Cras pulvinar lobortis lacus ut vulputate. Etiam mauris nisi, egestas in orci quis, commodo gravida dolor. Quisque vel justo ligula. Quisque faucibus scelerisque lectus, eget auctor leo eleifend vel.</p>
                    <NavLink to={'/Login'}>Login</NavLink>
                    <NavLink to={'/co/Sids/products'}>Sid's Kitchen Stuff</NavLink>
                </section>
            </main>
        )
    }
}