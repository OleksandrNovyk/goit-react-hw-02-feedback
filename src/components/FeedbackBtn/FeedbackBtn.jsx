import PropTypes from 'prop-types';
import { Btn } from './Feedbackbtn.styled';

export const Feedbackbtn = ({
  text,
  status,
  disabled = false,

  onClick,
}) => {
  return (
    <Btn status={status} 
    type="button" 
    disabled={disabled} 
    onClick={onClick}>
      {text}
    </Btn>
  );
};

Feedbackbtn.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
