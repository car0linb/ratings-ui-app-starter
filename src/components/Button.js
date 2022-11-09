import PropTypes from "prop-types";


const Button = ({children, version, type, isDisabled}) =>{
    return (
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>{children}</button>
    )
};

Button.defaultProps = {
    version: "primary",
    type:  "button",
    isDisabled: false,
};
//default prop values 
//if we don't set default values then we would have to specify the props everywhere 
//that we use the button

Button.propTypes ={
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
};

export default Button;

