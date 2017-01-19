import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import ApiKey from './apiKey';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';



// // Create a new Component and it should produce some HTML
class App extends Component{
  constructor(props){
    super(props);

    this.state = {videos: []};

    YTSearch({key: ApiKey, term: 'surfboards'}, (videos) => {
      this.setState({videos})
      //this.setState({videos: videos})
    })
  }
  render(){
    return(
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
};
//Insert the Component on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
