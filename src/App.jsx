import { useState } from 'react'

const BackgroundColorChanger = () => {

  const colors = [
    '#FF6B6B',   
    '#4ECDC4',   
    '#45B7D1',   
    '#FDCB6E',  
    '#6C5CE7',  
    '#A8E6CF',  
    '#FF8A5B',   
    '#2ECC71',   
    '#34495E',  
    '#E74C3C'   
  ];
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);

  return (
    <div 
      style={{ 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: backgroundColor,
        transition: 'background-color 0.5s ease'
      }}
    >
      <h1 className="text-2xl font-bold mb-6 text-white">
        Background Color Selector
      </h1>
      
      <div >
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setBackgroundColor(color)}
            style={{ 
              backgroundColor: color,
              width: '40px', 
              height: '40px', 
              borderRadius: '50%',
              border: backgroundColor === color ? '3px solid white' : 'none',
              transform: backgroundColor === color ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.3s ease'
            }}
            aria-label={`Select ${color} background`}
          />
        ))}
      </div>

      
    </div>
  );
};

export default BackgroundColorChanger;