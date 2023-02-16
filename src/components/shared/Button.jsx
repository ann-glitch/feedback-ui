import PropTypes from "prop-types";

const Button = ({ children, type, version, isDisabled }) => {
  return (
    <div>
      <button
        type={type}
        disabled={isDisabled}
        className={`btn btn-${version}`}>
        {children}
      </button>
    </div>
  );
};

Button.defaultProps = {
  type: " button",
  version: "primary",
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
