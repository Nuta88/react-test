import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import postImg from '../../assets/img/Post-Bank.jpg';
import './Home.scss';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail  from 'react-bootstrap/lib/Thumbnail';
import {NavLink} from "react-router-dom";
import {getPost} from "../../actions";
import {browserHistory} from 'react-router';

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
};
    const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            onPostClick: (id) => {
                if(id) {
                    dispatch(getPost(id));
                }
            }
        }
    };

const Home = ({posts, onPostClick}) => (
    <Grid>
        <Row className="row-flex">
            {posts.map((post, index) =>
                <Col xs={12}
                     md={6}
                     lg={4}
                     key={index}
                     className="col-indent">
                    <NavLink onClick={() => onPostClick(post.id)}
                              to={`/post/${post.id}`}>
                        <Thumbnail src={postImg}
                                   className="card">
                            <div className="card-content">
                                {post.title}
                            </div>
                        </Thumbnail>
                    </NavLink>
                </Col>
            )}
        </Row>

    </Grid>
);

Home.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            userId: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)