import propTypes from 'prop-types';
import StatisticElement from './StatisticElement/StatisticElement';
import StatisticTitle from './StatisticTitle/StatisticTitle';
import getRandomColor from './getRandomColor';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      <StatisticTitle title={title} />
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={css.item}
            style={{
              flexBasis: `${100 / stats.length}%`,
              backgroundColor: getRandomColor(),
            }}
          >
            <StatisticElement label={label} percentage={percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.array,
};
