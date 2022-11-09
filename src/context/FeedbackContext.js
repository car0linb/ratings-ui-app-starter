// //provider component

// import { createContext, useState, useEffect } from "react";

// const FeedbackContext = createContext();

// //we need to create provider that will be able to use context

// export const FeedbackProvider = ({children}) =>{
//     const [isLoading, setIsLoading] = useState(true);
//      //moving data to context instead of global state
//     const [feedback, setFeedback] = useState([]);
//     //this is now source of truth

//     useEffect(() => {
//         fetchFeedback();
//       }, []);

//       const fetchFeedback = async () => {
//         const response = await fetch("/feedback");
//         const data = await response.json();
    
//         setFeedback(data);
//         setIsLoading(false);
//       };



//       return (
//         <FeedbackContext.Provider
//           value={{
//             feedback,
//             isLoading,
           
//           }}
//         >
//           {children}
//         </FeedbackContext.Provider>
//       );
//     };
    
//     export default FeedbackContext;

import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  // that is now the source of truth

  useEffect(() => {
    fetchFeedback();
  }, []);
  // dont pass anything to the array cause loading feedbacks should only be donce once

  const fetchFeedback = async () => {
    const response = await fetch("/feedback");
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback(data, ...feedback);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        isLoading,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;