import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../ducks';

class SearchBar extends Component {
    state = { term: '' };

    onInputChange = (event) =>{
        this.setState({term: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        // We need to fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
             <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favourite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
             </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchWeather }, dispatch);

export default connect(null, mapDispatchToProps)(SearchBar);
