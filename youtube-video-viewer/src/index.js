import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import { debounce } from '../../utils/function';
const API_KEY = "AIzaSyDrfWOPGSyqY18Ud7H958l3RMfZssV0kOE";

class App extends Component {
    constructor() {
        this.videoSearch("cats");
    }

    state = {
        videos: [],
        selectedVideo: null,
    };


    videoSearch = (term) => {
        YTSearch({ term, key: API_KEY }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
            });
        });
    }

    render() {
        const videoSearch = debounce((term) => { this.videoSearch(term) }, 300);

    	return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));
