import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Skills extends Component {
    render() {
        return (
            <div>
                 <Container>
                    <Row>
                        <Col>
                            <h1>This is my skills</h1>
                        </Col>
                    </Row>
                </Container>
                <Row>
                    <Col>
                        <p>Skills</p>
                        <p>blablablabla</p>
                        <p>blablablabla</p>
                    </Col>
                </Row>
            </div>
        )
    }
}
