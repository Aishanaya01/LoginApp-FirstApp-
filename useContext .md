# Introduction
the React Hook useContext() in your React project. The Context API is a React structure that allows you to share specific data from all levels of your application and aids in solving prop-drilling.

React Hooks are functions that serve as a modular replacement for state and lifecycle methods written in functional components. The useContext() method is an alternative to prop-drilling through the component tree and creates an internal global state to pass data.<br><br>
# Examining the Context API
To examine the Context API, let’s approach how to access context in a React application. React offers the createContext() method to assist in passing data as a prop.<br><br>

In your ColorContext.js file, set a colors object and pass a property as an argument to the createContext() method:<br><br>
```
const colors = {
  blue: "#03619c",
  yellow: "#8c8f03",
  red: "#9c0312"
};

export const ColorContext = React.createContext(colors.blue);
```
This will allow the .createContext() method to subscribe the property colors.blue as a prop from one component to another.
<br><br>
# Handling the useContext() Method
The useContext() method accepts a context within a functional component, and works with a .Provider and .Consumer component in one call. In your index.js file, import the useContext() method and the ColorContext function, and declare a functional component:<br><br>
```
import React, { useContext } from "react";
import ColorContext from './ColorContext';

const MyComponent = () => {
  const colors = useContext(ColorContext);

  return <div style={{ backgroundColor: colors.blue }}>Hello World</div>;
};
```
The functional component MyComponent sets the value within your ColorContext as an argument to the useContext() method. Your return statement applies the background color in your application. When a change triggers, the useContext() method will subscribe update with the latest context value. Compared to the Context API, the useContext() method allows you to share and pass data throughout your application in fewer lines of code.<br><br>