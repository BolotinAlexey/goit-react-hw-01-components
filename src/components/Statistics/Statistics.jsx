import propTypes from 'prop-types';
import StatisticElement from './StatisticElement/StatisticElement';
import StatisticTitle from './StatisticTitle/StatisticTitle';
import css from './Statistics.module.css';
import { Item } from './Item.styled.js';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      <StatisticTitle title={title} />
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} className={css.item}>
            <StatisticElement label={label} percentage={percentage} />
          </Item>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.array,
};
