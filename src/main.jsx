// Import the StrictMode component from React, which highlights potential problems in an application
import { StrictMode } from 'react'
// Import the createRoot function from React DOM, which creates a root to display React components inside a browser DOM node
import { createRoot } from 'react-dom/client'
// Import the global CSS styles for the application
import './index.css'
// Import the main App component from the local App.jsx file
import App from './App.jsx'

// Call createRoot, passing it the HTML element with the id 'root', and then render the app inside it
createRoot(document.getElementById('root')).render(
  // Wrap the App component in StrictMode for additional checks and warnings during development
  <StrictMode>
    {/* Render the App component, which contains the rest of the application */}
    <App />
  {/* Close the StrictMode wrapper */}
  </StrictMode>,
// Close the render function call
)
