import React from 'react';
import './Gallery.scss';

export function Gallery(props) {
  return (
    <ul className='tiled-gallery'>
            {props.images?.map((image, index) => (
              <li key={index}>
                <img className='gallery-images' src={image}/>
              </li>
            ))}
          </ul>
  )
}

export default Gallery;