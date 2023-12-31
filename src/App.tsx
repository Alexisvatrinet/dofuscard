import React from 'react';
import './App.css'; 
import CardSlider from './components/CardSlider';
import Card from './components/Card';

function App() {
  const cardsData = [
    { id: 1, title: 'Cra', description: 'Archer', imageUrl: './cra.jpg' , 
    additionalImages : [
       { id: 1, imageUrl: './public/sort/1.png', alt: '' }, 
       { id: 2, imageUrl: './sort/2.png', alt: '' , description:'fleche' },
       { id: 3, imageUrl: './sort/165.png', alt: '' , description:'' },
       { id: 4, imageUrl: './sort/167.png', alt: '' , description:'' },

     
    ],
    videoUrl: "SXwZCdTAfWc?si=0hj9XU1OA7tGvONY&amp;controls=0"
   },
    { id: 2, title: 'Feca', description: 'Protecteur', imageUrl: './feca.jpg', 
    additionalImages : [
      { id: 1, imageUrl: '', alt: '' }, 
      { id: 2, imageUrl: '', alt: '' },
     
   ], },
    { id: 3, title: 'enu', description: 'Chasseur de trésor', imageUrl: './enu.jpg',
    additionalImages : [
      { id: 1, title: 'entrave', imageUrl: '', alt: '' }, 
      { id: 2, imageUrl: '', alt: '' },
    
   ], },
    
  ];

  return (
    <div className="App">
      {/* Boucle pour afficher les cartes */}
      <CardSlider cards={cardsData} />
      <div className="card-container">
      {cardsData.map(card => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          additionalImages={card.additionalImages}
          videoUrl={card.videoUrl}
        />
      ))}
      </div>
    </div>
  );
}

export default App;

