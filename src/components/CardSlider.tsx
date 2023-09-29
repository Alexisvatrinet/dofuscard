import React, { useState } from 'react';
import Card from './Card';
import { CardProps } from './Card'

interface CardSliderProps {
    cards: CardProps[];
  }

const CardSlider :  React.FC<CardSliderProps> = ({ cards }) => {

const [currentIndex, setCurrentIndex] = useState (0);

const nextcard = () => {
    setCurrentIndex((prevIndex) =>(prevIndex === cards.length - 1 ? 0 : prevIndex +1));
};

const prevcard = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? cards.length - 1 : prevIndex -1);
 };

return (
    <div className="card-slider">
    <button onClick={prevcard}>&lt;</button>
    <div className="card-container">
      {cards.map((card, index) => (
        <Card key={card.id} {...card} isVisible={index === currentIndex} />
      ))}
    </div>
    <button onClick={nextcard}>&gt;</button>
  </div>
);

};

export default CardSlider; 