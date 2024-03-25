import Styles from "./Dialog.module.css"



export default function Dialog({ isOpen, title, message, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className={Styles.dialogOverlay}>
      <div className={Styles.dialog}>
        <h2>{title}</h2>
        <p>{message}</p>
        <div className={Styles.dialogButtons}>
          <button onClick={onClose}>تراجع</button>
          <button onClick={onConfirm}>متابعة</button>
        </div>
      </div>
    </div>
  );
}

