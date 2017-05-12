import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
  const list = props.comments.map(comment => <li key={comment}>{comment}</li>);
  return(
    <ul className='comment-list'>{list}</ul>
  );
};

function mapStateToProps(state) {
  return { comments: state.comments };
}

// in order for comment list to have access to our app level state we use the connect helper below
export default connect(mapStateToProps)(CommentList);
