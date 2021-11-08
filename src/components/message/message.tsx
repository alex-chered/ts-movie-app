// components
import { Container } from 'components/container';
// css
import styles from './message.module.css';

// PROPS
interface PageMessageProps {
  text: string
}

// COMPONENT
export const Message = (props: PageMessageProps) => {
  const { text } = props;

  // RENDER
  return (
    <Container>
      <div className={styles['message']}>
        <p className={styles['message__text']}>
          { text }
        </p>
      </div>
    </Container>
  );
};
