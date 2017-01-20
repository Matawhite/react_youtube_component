import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import ApiKey from './apiKey';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {videos: []};

    YTSearch({key: ApiKey, term: 'huskies'}, (videos) => {
      this.setState({videos})
      //this.setState({videos: videos})
    })
  }
  render(){
    return(
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'))
