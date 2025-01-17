import {useState} from "react";
import Card from "./Card";
import Button from "./Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({handleAdd}) => {
    const [text, setText] = useState("");
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");

    //add handleChange
    const handleTextChange = (e) =>{
        //validation should run whenever we type, at least 10 characters long
        if (text === ""){
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== "" && text.trim().length <=10){
            //text.trim() is trimming of white space
            setMessage("Text must be at least 10 characters");
            setBtnDisabled(true);
        } else{
            setMessage(null);
            setBtnDisabled(false);
        }

        setText(e.target.value);
        
    }


   const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10){
        const newFeedback = {
            text,
            rating
        };

        handleAdd(newFeedback);
        setText("");

    }
   };

    return(
        <Card>
            <form onSubmit = {handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select = {(rating) => setRating(rating)}/>
                <div className = "input-group">
                    <input 
                    type = "text"
                    placeholder = "Write a review"
                    onChange = {handleTextChange}
                    value={text}
                    />
                    <Button type = "submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div>{message}</div>}
            </form>
        </Card>
    );
};

export default FeedbackForm;