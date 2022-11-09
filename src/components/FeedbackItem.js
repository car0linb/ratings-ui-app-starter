// import {useState} from "react";

import {FaTimes} from "react-icons/fa";

import Card from "./Card";


const FeedbackItem = ({item, handleDelete}) => {
    //we need one state for the rating and one for the text

    //state for rating (we can give it whatever initial value we want):
    // const [rating, setRating] = useState(8);

    //state for text:
    // const [text, setText] = useState("This is an example of a feedback item.");

    //since we pass in item as prop we no longer need state

    return(
        <Card>
            {/* we want to display the rating and the text here, properties of the feedback item 
            pass in states instead of hard coding*/}
            <div className="num-display">
                {/* not 10, instead: */}
                {item.rating}
            </div>
            <button onClick={()=> handleDelete(item.id)} className="close"><FaTimes color="#B000B9"/></button>
            <div className="text-display">
                {item.text}
            </div>

        </Card>
    )
};

export default FeedbackItem;

//Will be responsible for showing feedback, feedback item should show rating 
//and it should show text. 
//Since we should be able to change that rating and that feedback text dynamically
//we need a state for this component 