// third-party libraries
import classNames from 'classnames';
// css
import styles from './button.module.css';

// PROPS
interface ButtonProps {
  text: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

// COMPONENT
export const Button = (props: ButtonProps) => {
  const {
    text,
    disabled = false,
    className,
    onClick
  } = props;

  // css
  const classes = classNames(
    styles['button'],
    {
      [styles['button--disabled']]: disabled
    },
    className
  );

  // RENDER
  return (
    <button
      className={classes}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      { text }
    </button>
  );
};
