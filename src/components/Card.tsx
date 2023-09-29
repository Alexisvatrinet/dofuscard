import React, { useState } from 'react';

export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  additionalImages: { id: number; imageUrl: string; alt: string; description?: string }[];
  videoUrl: string | undefined;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, additionalImages, videoUrl }) => {
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const [showInfoPopup, setShowInfoPopup] = useState(false);

  const toggleVideoPopup = () => {
    setShowVideoPopup(!showVideoPopup);
    setShowInfoPopup(false); // Ferme également la popup d'informations si elle est ouverte
  };

  const toggleInfoPopup = () => {
    setShowInfoPopup(!showInfoPopup);
  };

  return (
    <div className={`card ${showVideoPopup ? 'video-playing' : ''}`}>
      <img className="card-image" src={imageUrl} alt={title} />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>

      <button className="card-button" onClick={toggleInfoPopup}>
        {showInfoPopup ? "Fermer Info" : "En savoir plus"}
      </button>

      {!showVideoPopup && (
        <button className="card-play" onClick={toggleVideoPopup}>
          {"?"}
        </button>
      )}

      {showVideoPopup && (
        <button className="card-play" onClick={toggleVideoPopup}>
          Fermer
        </button>
      )}

      {showInfoPopup && (
        <div className="popup">
          {additionalImages.map((image) => (
            <div key={image.id}>
              <img src={image.imageUrl} alt={image.alt} />
              <p>{image.description}</p>
            </div>
          ))}
        </div>
      )}

      {showVideoPopup && (
        <div className="video-popup">
          <iframe
            className="card-video css-video"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoUrl ?? 'URL_PAR_DEFAUT'}`}
            title="Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Card;
