import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => (
    <ul className="comment-list">
        {props.comments.map((comment) => <li key={comment}>{comment}</li>)}
    </ul>
);

const mapStateToProps = ({ comments }) => ({ comments });

export default connect(mapStateToProps)(CommentList);
