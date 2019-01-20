import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../ducks';
import { Link } from 'react-router-dom';


class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.posts.props.map((post) => (
                        <li className="list-group-item" key={post.id}>
                            <Link to={`/posts/${post.id}`}>
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
