import React, { Component } from 'react';
import Profpic from './Azil1.jpg'
import './image.css'

class Image extends Component {
    render() {
        return (
            <div class='text-center'>
                <img src={Profpic} alt='profpic' style={{ width: 300, borderRadius: 300 / 2 }} />
                <h1>Hello, I am Fairus Jazilah</h1>
                <p>Fullstack Web Developer || Entrepreneur</p>
            </div>
        );
    }
}
export default Image;