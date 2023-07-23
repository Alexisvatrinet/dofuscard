import React, { useState } from 'react';

function Card({ title, description, imageUrl, additionalImages }) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(prevShowPopup => !prevShowPopup);
  };

  return (
    <div className="card">
      <img className="card-image" src={imageUrl} alt={title} />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <button className="card-button" onClick={togglePopup}>
        {showPopup ? "Fermer" : "En savoir plus"}
      </button>

      {showPopup && (
        <div className="popup">
          {additionalImages.map((image) => (
            <div key={image.id} >
                <img src={image.imageUrl} alt={image.alt} />
            <p>{image.description}</p>
            </div>
          ))}
          {/* Ajoutez du contenu supplémentaire pour la popup ici si nécessaire */}
        </div>
      )}
    </div>
  );
}

export default Card;
