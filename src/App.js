//structure imports 

//react imports first
import {useState} from "react";
import { FeedbackProvider } from "./context/FeedbackContext";

//packages (eg browser router) second
import {v4 as uuidv4} from "uuid";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//component imports in bottom
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";

//we need to states, component level and global level, this is global state:
//our ratings are going to be our state and we need to share it with a lot of components, thats
//why we need a global state in app


//How do we decide what we want to use as state?
// IMPORTANT:
//Everything we want to MANIPULATE, CREATE, UPDATE OR DELETE we want to have as state
//--> because its easy for us to access if its in state
//This is an app where you can add feedback

function App() {
  //add state variables and pass in the feedback data
  const [feedback, setFeedback] = useState(FeedbackData);
  //this is our initial value, an array of objects

  //This is where we set our global state and it's the only global state we'll need
  //although we'll have component state where only that component will have access to the state


  // console.log(feedback) //checking our STATEVARIABLE

  const addFeedback = (newFeedback) => {
    //gives new feedback original id
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]); //add ...feedback so we don't overwrite what we had
  };


  const deleteFeedback = (id) => {
    if(window.confirm("Are your sure?")) //popup to confirm delete. This if is about that confirmation.
    //if ok is pressed where we need to update feedback.
    //data is in state right now which is an array of objects
    //we're going to use array method "filter" and filter out through the feedbacks that we have
    {
      setFeedback(feedback.filter((item) => item.id !== id))
      //calling for state, update through "setFeedback", 
      //then calling for feedback
      //this is going to return an array minus the id that we're deleting
    }

  };
  //we need to pass in id so we can grab that when deleting

  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
