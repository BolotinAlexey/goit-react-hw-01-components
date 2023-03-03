import propTypes from 'prop-types';
import css from './StatisticElement.module.css';

export default function StatisticElement({ label, percentage }) {
  console.log(label + 'kl');
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </>
  );
}

StatisticElement.propTypes = {
  label: propTypes.string,
  percentage: propTypes.number,
};
