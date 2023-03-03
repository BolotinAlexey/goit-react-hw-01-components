import propTypes from 'prop-types';
import StatisticElement from './StatisticElement/StatisticElement';
import css from './Statistics.module.css';

export default function Statistics({ stats }) {
  return (
    <section className={css.statistics}>
      {/* <h2 className={css.title}>{title}</h2> */}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={css.item}>
            <StatisticElement label={label} percentage={percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}
