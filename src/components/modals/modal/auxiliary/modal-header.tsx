// css
import styles from '../modal.module.css';

// PROPS
interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

// COMPONENT
export const ModalHeader = (props: ModalHeaderProps) => {
  const { title, onClose } = props;

  // RENDER
  return (
    <div className={styles['modal__header']}>
      <span className={styles['modal__header-title']}>{title}</span>
      {/* Close Button */}
      <span
        className={styles['modal__header-times']}
        onClick={onClose}
        role="button"
        tabIndex={0}
      >
        ×
      </span>
    </div>
  );
};
