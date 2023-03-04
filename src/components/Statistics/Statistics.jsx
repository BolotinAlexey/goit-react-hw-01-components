import PropTypes from 'prop-types';
import StatisticElement from './StatisticElement/StatisticElement';
import StatisticTitle from './StatisticTitle/StatisticTitle';
import css from './Statistics.module.css';
import { Item } from './Item.styled.js';

function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      <StatisticTitle title={title} />
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} length={stats.length}>
            <StatisticElement label={label} percentage={percentage} />
          </Item>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
