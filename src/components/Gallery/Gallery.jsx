import React, { useEffect, useState } from 'react';
import styles from './Gallery.module.css';
import SocialActions from './SocialActions';

const Gallery = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=9')
      .then((res) => res.json())
      .then((data) => setCats(data));
  }, []);

  return (
    <div className={styles.gallery}>
      {cats.map((cat) => (
        <div key={cat.id} className={styles.imageContainer}>
          <img src={cat.url} alt="Cat" className={styles.catImage} />
          <SocialActions imageUrl={cat.url} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
