import css from './StatisticTitle.module.css';

export default function StatisticTitle({ title }) {
  return title && <h2 className={css.title}>{title}</h2>;
}
