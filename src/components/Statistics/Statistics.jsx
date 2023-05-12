import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({
    good, bad, neutral, total, positivePercentage
}) => {
    return (
        <div>
            <span className={css.stat__list}>Good: {good}</span>
            <span className={css.stat__list}>Bad: {bad}</span>
            <span className={css.stat__list}>Neutral: {neutral}</span>
            <span className={css.stat__list}>Total: {total()}</span>
            <span className={css.stat__list}>Positive Feeds: {positivePercentage()}%</span>
        </div>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
};