import PropTypes from "prop-types";

const Card = ({children, reverse}) => {
    return(
        // <div className = {`card ${reverse && "reverse"}`}>
        //     {/* we're saying className is card but if we have a prop called reverse
        //     the className will be reverse, conditional styling by using css class */}
        //     {children}
        // </div>

        <div className = "card" 
        style = {{
            backgroundColor: reverse ? "rgba 0,0,0,0.4" : "#fff",
            color: reverse ? "#fff" : "#000"
        }}>
            {children}
        </div>

    )
};

export default Card;

//PROP TYPES
//We can use Prop types here to pass some rules with components, it's a little bit more strict
//We can specify default values with prop types

Card.defaultProps = {
    reverse: false,
};

//we can also say that some props are required to use this component

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool, //can never be anything but boolean
}