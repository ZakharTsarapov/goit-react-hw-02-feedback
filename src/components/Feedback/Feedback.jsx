import PropTypes from 'prop-types';
import css from './Feedback.module.css'

export const Feedback = ( { options, handleLeaveFeedback }) => {
    return (
        <ul className={css.list}>
            {options.map(option => ( <li key={option}>
                <button className={css.button} type={option} onClick={() => handleLeaveFeedback(option)}>{option}</button>
            </li>   
            ))}
        </ul>
            
    );
};

Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};