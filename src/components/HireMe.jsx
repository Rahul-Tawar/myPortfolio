import React from 'react';

const ConditionalButton = () => {
  // Define a state to track the screen width
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  // Update the screen width state when the window is resized
  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {/* Conditionally render the button based on screen size */}
      {screenWidth > 640 && <button>Hire Me</button>}
    </div>
  );
};

export default ConditionalButton;
