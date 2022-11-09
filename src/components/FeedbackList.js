import { useContext } from "react";


//import feedbackItem to Feedbacklist and it is rendered here instead of app
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";


//responsible for looping through our list of our feedbacks 
//by using feedback item component
//shows one feedback item for each rating by looping over

const FeedbackList = ({ handleDelete }) => {

  //to consume useContext we destructure feedback
  const {feedback} = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet!</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
      ))}
    </div>
  );
};
export default FeedbackList;