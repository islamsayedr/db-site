import styles from './Btn.module.css'
import PropTypes from 'prop-types';

const Btn = ({text, clickAction, type})=> {
    
  return(
    <div onClick={clickAction} className={`${styles.btn} ${type}`}>{text}</div>
    )
  }
  
  Btn.propTypes = {
    text: PropTypes.any,
    clickAction: PropTypes.func,
    type: PropTypes.any
  }


export default Btn;