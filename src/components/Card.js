import { useState } from 'react';

const Card = ({ title, code, description, realLifeExample }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="w-full md:w-64 m-4 p-4 border rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 ease-in-out hover:shadow-xl" 
      onClick={handleClick} 
      style={{ minHeight: '200px' }}
    >
      {isFlipped ? (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Code Example:</h2> {/* Clearer label */}
          <p className="text-left font-mono text-sm p-2 rounded">{code}</p> {/* Styled for code readability */}
          <p className="mt-2 text-sm italic">flip</p>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p><strong>Description:</strong> {description}</p> {/* Clearer label */}
          <p className="text-sm italic"><strong>Real-life Example:</strong> {realLifeExample}</p> {/* Clearer label and italicized for emphasis */}
        </div>
      )}
    </div>
  );
};

export default Card;
