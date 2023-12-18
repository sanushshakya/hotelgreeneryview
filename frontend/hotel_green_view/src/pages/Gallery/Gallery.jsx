import React, { useEffect, useState } from 'react';
import './Gallery.scss';
import axios from 'axios';
import config from '../../config';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resPhoto = await axios.get(`${config.apiBaseUrl}/gallery/Gallery/`);
        setPhotos(resPhoto.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='gallery'>
        <div className='container'>
            {photos.map((photo) => (
            <div className='image' key={photo.id} onClick={() => handleImageClick(photo.image)}>
                <img src={photo.image} alt={`Image ${photo.id}`} />
            </div>
            ))}
        </div>
    </div>
  );
};

export default Gallery;
