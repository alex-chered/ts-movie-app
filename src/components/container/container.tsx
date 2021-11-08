import { ReactNode } from 'react';
// css
import styles from './container.module.css';

// PROPS
export interface ContainerProps {
  children: ReactNode
}

// COMPONENT
export const Container = (props: ContainerProps) => {
  const { children } = props;

  // RENDER
  return (
    <div className={styles['container']}>
      { children }
    </div>
  );
};
