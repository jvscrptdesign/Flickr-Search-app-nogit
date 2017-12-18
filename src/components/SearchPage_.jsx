import React from 'react';
import ErrorBoundary from './ErrorBoundary_.jsx';
import SearchResults from './SearchResults_.jsx';

//https://www.youtube.com/watch?v=wRAb0eG0dnw&index=18&list=PLfEx1eT-M-svevD3FBa-8BBwOUOtkWvPz

class SearchPage extends React.Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
        searchTxt: '',
        allPhotos: []
    };
  }

  handleChange = (e) => {
    this.setState({
      searchTxt: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchTxt !== '') {
        let urlBase = "https://api.flickr.com/services/rest/",
            method = "flickr.photos.search",
            apiKey = "af2c9a79710cfb929faa00bdd31dea04", //acquire at https://www.flickr.com/services/apps/create/apply
            searchTerm = document.getElementById("searchInput").value, 
            page = "1",
            perPage = "20",
            format = "json",
            callback = 1,
            url = `${urlBase}?method=${method}&api_key=${apiKey}&text=${searchTerm}&per_page=${perPage}&page=${page}&format=${format}&nojsoncallback=${callback}`;

        //https://github.com/github/fetch
        fetch(url).then(response => {
            //console.log('\n\nStatus:', response.status);
            response.json().then(data => {
                this.setState({
                    searchTxt: '',
                    allPhotos: data.photos.photo
                });
                console.log('data:\n', data);
            }).catch(err => {
                console.log('Fetch parsing error ', err);
            });
        });
    }
  };

  render () {
    return (
        <ErrorBoundary>
            <div>
              <h3>{ this.props.title }</h3>
              <form onSubmit={ this.handleSubmit }>
                <input onChange={ this.handleChange } value={ this.state.searchTxt } type="text" id="searchInput"/>
                <button>Search</button>
              </form>
                <SearchResults
                    allPhotos={ this.state.allPhotos }
                />
            </div>
        </ErrorBoundary>
    );
  }
}

export default SearchPage;
