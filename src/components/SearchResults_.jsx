import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from './ErrorBoundary_.jsx';
import '../styles/photo.css';
/*
more information on photo urls:
https://www.flickr.com/services/api/misc.urls.html
*/

class SearchResults extends React.Component{
    render() {
        return (
            <ErrorBoundary>
                <div className="allPhotos">
                        {this.props.allPhotos.map((photo, i) => (
                                <img
                                    src={ `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg` }
                                    alt='https://farm1.staticflickr.com/2/1418878_1e92283336_m.jpg'
                                    key={ photo.id }
                                    id={i}
                                />
                        ))}
                </div>
            </ErrorBoundary>
        );
    }
}

//https://farm1.staticflickr.com/2/1418878_1e92283336_m.jpg
/*SearchResult.defaultProps  = {
    allPhotos: [
        {
            farm : 1,
            server : '2',
            id : '1418878',
            secret : '1e92283336',
            size : 'm',
        }
    ]
};*/

SearchResults.propTypes = {
    allPhotos: PropTypes.array.isRequired,
}

export default SearchResults;
