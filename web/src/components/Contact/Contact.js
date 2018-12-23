import React, { Component } from 'react';
import '../App/App.scss';
import ContactImg from '../../assets/img/contact.png';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image  from 'react-bootstrap/lib/Image';
import ListGroup  from 'react-bootstrap/lib/ListGroup';
import ListGroupItem  from 'react-bootstrap/lib/ListGroupItem';

class Contact extends Component {
    render() {
        return (
            <Grid>
                <Row className="indent mb">
                    <Col lg={4}
                         xs={12}>
                        <Image src={ContactImg} responsive />
                    </Col>
                    <Col lg={8}
                         xs={12}>
                        <h2>
                            Contact us
                        </h2>
                        <ListGroup className="App-font indent">
                            <ListGroupItem>B 425, 100 Down Streat Avenue, New York City, NY 1001</ListGroupItem>
                            <ListGroupItem>wpost@gmail.com</ListGroupItem>
                            <ListGroupItem>08455-3354-202</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Contact;