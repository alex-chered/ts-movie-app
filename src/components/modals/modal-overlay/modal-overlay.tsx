import { ReactNode } from 'react';
// hooks
import { useKeyPress } from 'hooks/common';
// css
import styles from './modal-overlay.module.css';

// PROPS
interface ModalOverlayProps {
  children: ReactNode,
  onClose?: () => void
}

// COMPONENT
export const ModalOverlay = (props: ModalOverlayProps): JSX.Element => {
  const {
    children,
    onClose
  } = props;

  // Define the handler for clicking "Escape"
  useKeyPress({
    key: 'Escape',
    keyUpHandler: onClose
  });

  // RENDER
  return (
    <div
      className={styles['modal-overlay']}
      onClick={onClose}
      role="presentation"
    >
      { children }
    </div>
  );
};
