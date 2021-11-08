// router
import { Link } from 'react-router-dom';
// components
import { Container } from 'components/container';
import { Logo } from 'components/logo';
// css
import styles from './app-header.module.css';

// COMPONENT
export const AppHeader = () => {
  // RENDER
  return (
    <header className={styles['app-header']}>
      <Container>
        <div className={styles['app-header__inner']}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
      </Container>
    </header>
  );
};
