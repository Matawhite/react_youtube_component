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

    this.state = {
      videos: [],
      selectedVideo: null
      };

    YTSearch({key: ApiKey, term: 'huskies'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })

    })
  }
  render(){
    return(
      <div>
        {/* for the onVideoSelect function whatever is selected, that selection is passed an argument to the
          below function. Now VideoList has a function called onVideoSelect, or rather props.onVideoSelect
          and will continued to be passed to VideoListItem...wierd */}
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
          {console.log(this.state.selectedVideo)}
      </div>

    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'))
