import React, { Component } from 'react'
import HomePage2 from '../HomePage2';
import HomePage3 from '../HomePage3';
import HomePage4 from '../HomePage4';

export class Landing extends Component {
    render() {
        return (
            <div>
                <HomePage2/>
                <HomePage3/>
                <HomePage4/>
            </div>
        )
    }
}

export default Landing
