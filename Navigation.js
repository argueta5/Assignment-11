// Import React to use JSX syntax and component functionality
import React from 'react';
// Import the CSS file for styling the Navigation component
import './Navigation.css';

// Define the functional component named Navigation
const Navigation = () => {
  // Render the navigation bar
  return (
    <nav className="navbar"> {/* Applies the 'navbar' CSS class for styling */}
      {/* Navigation links */}
      <a href="#home">Home</a> {/* Link to the 'Home' section of the page */}
      <a href="#about">About</a> {/* Link to the 'About' section of the page */}
      <a href="#contact">Contact</a> {/* Link to the 'Contact' section of the page */}
    </nav>
  );
};

// Export the Navigation component for use in other parts of the application
export default Navigation;