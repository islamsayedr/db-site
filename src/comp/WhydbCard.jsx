import Styles from './WhydbCard.module.css'

export default function WhydbCard({title, des, icon}) {
  return <div className={Styles.card}>
    <span className={Styles.icon}>
    <img src={icon} alt="icon" />
    </span>
    <div className={Styles.body}>
      <h3>{title}</h3>
      <p>{des}</p>
    </div>
  </div>;
}