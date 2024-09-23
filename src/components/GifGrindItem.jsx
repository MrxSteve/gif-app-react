import React from 'react';
import PropTypes from 'prop-types';

export const GifGrindItem = ({ title, url, id }) => {

    return (
    
        <div className='card'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    
    )
}

GifGrindItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

