import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <title>Hello, I am Fairus Jazilah.I usually called Azil</title>
                        </Col>
                    </Row>
                </Container>
                <Row>
                    <Col>
                        <p>September 26th, 1992</p>
                        <p>State University of Jakarta, 2010</p>
                        <p>Bootcamp Batch Mizuchi, Impactbyte, 2020</p>
                    </Col>
                </Row>
            </div>
        )
    }
}
