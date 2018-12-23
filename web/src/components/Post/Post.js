import React, {Component} from 'react';
import '../App/App.scss';
import {connect} from 'react-redux';
import {getPost} from '../../actions';
import PropTypes from 'prop-types';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';
import postImg from "../../assets/img/Post-Bank.jpg";
import './Post.scss'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        findPost: dispatch(getPost(ownProps.match.params.id))
    }
};

const mapStateToProps = state => {
    return {
        post: state.post
    }
};

let Post = ({post}) => (
    <Grid  className="main-container indent">
        <Row className="row-flex">
            <Col md={12}
                 lg={6}>
                <Image src={postImg} responsive />
            </Col>
            <Col xs={12}
                 md={12}
                 lg={6}
                 className="info">
                <div>
                    <div>Author: <span className="info-name">{post.name}</span></div>
                    <div>Title: <span className="info-name">{post.title}</span></div>
                </div>
            </Col>
        </Row>

        <Row>
            <Col lg={12}
                 className="post">
                {post.body}
            </Col>
        </Row>

        <Row>
            <Col lg={12}>
                    <div>Comments</div>
                <div className="comments">
                    {!post.comments ? null :post.comments.map((comment, index) =>
                        <div className="comment"
                             key={index}>
                            <div className="comment-title">{comment.name}</div>
                            <div className="comment-body">{comment.body}</div>
                            <div className="comment-body">{comment.email}</div>
                        </div>
                    )}
                </div>

            </Col>
        </Row>

    </Grid>
);

Post.propTypes = {
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    name: PropTypes.string,
    comments: PropTypes.array
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post)