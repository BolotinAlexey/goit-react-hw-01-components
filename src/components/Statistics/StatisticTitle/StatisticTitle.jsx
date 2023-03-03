import propTypes from 'prop-types';
import css from './StatisticTitle.module.css';

export default function StatisticTitle({ title }) {
  return title && <h2 className={css.title}>{title}</h2>;
}
StatisticTitle.propTypes = {
  title: propTypes.string,
};
