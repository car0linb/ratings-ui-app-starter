//Not a component just an array of objects that we will return so we can import that array
//of objects in app, array could be put in app but this is cleaner 

const FeedbackData = [

    //defining what feedback is, it's an ID, it's a rating(number) and it's text
    { 
        id: 1, 
        rating: 10,
        text: "Loved it"
    },
    { 
        id: 2, 
        rating: 3,
        text: "Not impressed, although entertained"
    },
    { 
        id: 3, 
        rating: 8,
        text: "Entertained but not above average"
    },
    
];

export default FeedbackData;