import { MouseEvent, ReactNode } from 'react';
// css
import styles from '../modal.module.css';

// PROPS
interface ModalWrapperProps {
  children: ReactNode
}

// COMPONENT
export const ModalWrapper = (props: ModalWrapperProps) => {
  const { children } = props;

  const onClickModalHandler = (e: MouseEvent<HTMLDivElement>): void => {
    // stop bubbling the event,
    // because we don't want to run the overlay's handler
    e.stopPropagation();
  };

  // RENDER
  return (
    <div
      className={styles['modal']}
      onClick={onClickModalHandler}
      role="presentation"
    >
      { children }
    </div>
  );
};
