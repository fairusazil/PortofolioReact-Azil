import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Contact extends Component {
    render() {
        return (
            <div>
            <Container>
               <Row>
                   <Col>
                       <h1>This is my Contact</h1>
                   </Col>
               </Row>
           </Container>
           <Row>
               <Col>
                   <p>Contact</p>
                   <p>blablablabla</p>
                   <p>blablablabla</p>
               </Col>
           </Row>
       </div>
        )
    }
}
