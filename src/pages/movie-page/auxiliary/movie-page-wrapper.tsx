import { ReactNode } from 'react';
// components
import { Container } from 'components/container';
// css
import styles from '../movie-page.module.css';

// PROPS
interface MoviePageWrapperProps {
  children: ReactNode
}

// COMPONENT
export const MoviePageWrapper = (props: MoviePageWrapperProps) => {
  const { children } = props;

  // RENDER
  return (
    <main id="movie-page">
      <Container>
        <div className={styles['movie-page__inner']}>
          { children }
        </div>
      </Container>
    </main>
  );
};
