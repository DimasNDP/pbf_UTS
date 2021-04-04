import React, { Component } from 'react'
import '../css/About.css'
export class About extends Component {
    render() {
        return (
            <div className="about">
                <img src={require('../images/dimas.jpg')} alt='logo' />
                <div className="square">
                    <div className="rows">
                        <h2 className="name">Owned by Dimas NDP</h2>
                        <span></span>    
                    </div>
                    <p className="nim">NIM : 1841720171</p>
                    <p className="kls">Kelas : TI-3F</p>
                </div>
            </div>
        )
    }
}

export default About
