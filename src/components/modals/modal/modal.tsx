import ReactDOM from 'react-dom';
// router
import { useHistory } from 'react-router-dom';
// components
import { ModalOverlay } from '../modal-overlay';
// aux. components
import {
  ModalWrapper,
  ModalHeader
} from './auxiliary';

// Get the element where modal windows will be rendered in
const divReactModals = document.getElementById('react-modals');

// PROPS
interface ModalProps {
  title?: string;
  children: React.ReactNode,
  onClose?: () => void
}

// COMPONENT
export const Modal = (props: ModalProps) => {
  const {
    title = '',
    children,
    onClose
  } = props;

  const { goBack } = useHistory();

  // If there is no the required "div",
  // return nothing
  if (!divReactModals) {
    return null;
  }

  // CLOSE -> Click
  const onCloseHandler = () => {
    onClose && onClose();
    // Go to the previous page
    goBack();
  };

  // RENDER
  return ReactDOM.createPortal(
    (
      <ModalOverlay
        onClose={onCloseHandler}
      >

        {/* Modal */}
        <ModalWrapper>
          {/* Modal Header */}
          <ModalHeader
            title={title}
            onClose={onCloseHandler}
          />
          {/* Content */}
          { children }
        </ModalWrapper>

      </ModalOverlay>
    ),
    divReactModals
  );
};
