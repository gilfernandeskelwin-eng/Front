import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <h2>Atenção</h2>
        <p>Este componente usa CSS Modules!</p>
        <button onClick={onClose} className={styles.closeBtn}>Fechar</button>
      </div>
    </div>
  );
};

export default Modal;