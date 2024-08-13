// Import React and the useState hook for managing component state
import React, { useState } from 'react';
// Import the CSS file for styling the component
import './LoginForm.css';

// Define the functional component named LoginForm
const LoginForm = () => {
  // Declare state variables for username and password, initialized to empty strings
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Define the handleSubmit function to handle form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Log the username and password to the console (for debugging purposes)
    console.log('Username:', username);
    console.log('Password:', password);
  };

  // Render the component's UI
  return (
    <div className="login-form">
      {/* Display the title of the login form */}
      <h3 className="login-title">Log In</h3>
      {/* Define a form element with an onSubmit event handler */}
      <form onSubmit={handleSubmit}>
        <div>
          {/* Label for the username input field */}
          <label htmlFor="username">Username:</label>
          {/* Input field for the username */}
          <input
            type="text"
            id="username"
            name="username"
            value={username} // Bind the input value to the username state
            onChange={(e) => setUsername(e.target.value)} // Update username state on input change
          />
        </div>
        <div>
          {/* Label for the password input field */}
          <label htmlFor="password">Password:</label>
          {/* Input field for the password */}
          <input
            type="password"
            id="password"
            name="password"
            value={password} // Bind the input value to the password state
            onChange={(e) => setPassword(e.target.value)} // Update password state on input change
          />
        </div>
        {/* Submit button for the form */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// Export the LoginForm component for use in other parts of the application
export default LoginForm;