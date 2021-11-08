import { ReactNode } from 'react';
// components
import { Container } from 'components/container';
// css
import styles from '../main-page.module.css';

// PROPS
interface MainPageWrapperProps {
  children: ReactNode;
}

// COMPONENT
export const MainPageWrapper = (props: MainPageWrapperProps) => {
  const { children } = props;

  // RENDER
  return (
    <main id="home">
      <Container>
        <div className={styles['main-page__inner']}>
          { children }
        </div>
      </Container>
    </main>
  );
};
