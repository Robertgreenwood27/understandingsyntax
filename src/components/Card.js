import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const Card = ({ title, code, description, realLifeExample }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const cardStyle = {
    height: '300px', // Set a fixed height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url("/background.png")', // Set background image
    backgroundSize: 'cover', // Cover the entire card
    color: 'black' // Set text color to black
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front of the card */}
      <div 
        className="w-full md:w-64 m-4 p-4 border rounded-lg shadow-lg cursor-pointer"
        style={cardStyle}
        onClick={handleClick}
      >
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p><strong>Description:</strong> {description}</p>
          <p className="text-sm italic"><strong>Real-life Example:</strong> {realLifeExample}</p>
        </div>
      </div>

      {/* Back of the card */}
      <div 
        className="w-full md:w-64 m-4 p-4 border rounded-lg shadow-lg cursor-pointer"
        style={cardStyle}
        onClick={handleClick}
      >
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Code Example:</h2>
          <p className="text-left font-mono text-sm p-2 rounded">{code}</p>
          <p className="mt-2 text-sm italic">flip</p>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
