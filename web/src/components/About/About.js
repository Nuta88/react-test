import React, { Component } from 'react';
import PaperPost from '../../assets/img/paper-post.png';
import '../App/App.scss'
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image  from 'react-bootstrap/lib/Image';

class About extends Component {
    render() {
        return (
            <Grid>
                <Row className="indent">
                    <Col lg={4}
                         xs={12}>
                        <Image src={PaperPost} responsive />
                    </Col>
                    <Col lg={8}
                         xs={12}>
                        <div>
                            WPost.com is the most popular posting site in the world. It started off as a job search
                            engine that would crawl the web and index every job ever published along with offer no-cost
                            job postings. Now Indeed has become an extremely popular job board. Indeed has a huge resume
                            database, and claims over 180 million unique visitors per month and is available in 50
                            countries and 28 languages.
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default About;