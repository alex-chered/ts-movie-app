import { useEffect } from 'react';

type UseKeyPressProps = {
  key: string,
  keyUpHandler?: () => unknown,
  keyDownHandler?: () => unknown
}

// HOOK
export const useKeyPress = (
  props: UseKeyPressProps
) => {
  // Desctructure props
  const { key, keyDownHandler, keyUpHandler } = props;

  // Define the logic of the hook
  useEffect(() => {
    const keyUp = (e: KeyboardEvent) => {
      (e.key === key) && keyUpHandler && keyUpHandler();
    };

    const keyDown = (e: KeyboardEvent) => {
      (e.key === key) && keyDownHandler && keyDownHandler();
    };

    document.addEventListener('keyup', keyUp);
    document.addEventListener('keydown', keyDown);

    return () => {
      document.removeEventListener('keyup', keyUp);
      document.removeEventListener('keydown', keyDown);
    };
  }, [key, keyUpHandler, keyDownHandler]);
};
