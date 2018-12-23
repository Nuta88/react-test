import React, { Component } from 'react';
import '../App/App.scss';
import { connect } from 'react-redux';
import {getPost} from '../../actions';

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
    <div>
        Post
    </div>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post)