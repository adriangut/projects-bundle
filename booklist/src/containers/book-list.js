import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList = () => this.props.books.map((book) => (
        <li
            key={book.title}
            onClick={() => this.props.selectBook(book)}
            className="list-group-item"
        >
            {book.title}
        </li>
    ));

    render() {
        return (
          <ul className="list-group col-sm-4">
            {this.renderList()}
          </ul>
        );
    }
}

// Whatever is returned will show as props inside of BookList.
const mapStateToProps = ({ books }) => ({ books });

// Anything returned from this function will end up as props on BookList container.
const mapDispatchToProps = (dispatch) =>
    // Whenever selectBook is called, result is passed to all reducers.
    bindActionCreators({ selectBook }, dispatch);

// Promote BookList from a component to a container, it needs to know about new
// dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
