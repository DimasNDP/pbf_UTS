import React, { Component } from 'react'
import Products from './section/Products'
import Details from './section/Details'
import About from './section/About'
import {Route} from "react-router-dom"
import Cart from './section/Cart'
import Payment from './section/Payment'
import Home from './section/Home'


export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/home" component={Home} exact />
                    <Route path="/product" component={Products} exact  />
                    <Route path="/about" component={About} exact  />
                    <Route path="/product/:id" component={Details} exact />
                    <Route path="/cart" component={Cart}  exact/>
                    <Route path="/payment" component={Payment} exact />
            </section>
        )
    }
}

export default Section
