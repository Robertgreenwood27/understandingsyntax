import { useState } from 'react';

const Card = ({ title, code, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full md:w-64 m-4 p-4 border rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 ease-in-out hover:shadow-xl" onClick={handleClick} style={{ minHeight: '200px' }}> {/* Adjust styles here */}
      {isFlipped ? (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">{code}</h2>
          <p>Click to flip back</p>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
