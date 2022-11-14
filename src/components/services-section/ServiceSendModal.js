import { useCallback, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import '../../App.css';
import { SendForm } from './SendForm';
import { GratitudeForm } from './GratitudeForm';

const Modal = styled.div`
  position: fixed;
  z-index: 50;
  height: 100vh;
  width: 100vw;
  background-color: #74747436;
  color: black;
  top: 0;
  left: 0;

  & > div {
    overflow-y: auto;
    bottom: calc(var(--vh, 1vh) * 100 - 100vh);
    max-height: 100vh;
    width: 100vw;
    position: absolute;
    background-color: white;
    padding: 24px 26px 18px 26px;
  }
`;

export const ServiceSendModal = ({ isOpen, onClose, selectedList }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [contactError, setContactError] = useState('');

  const [isSended, setIsSended] = useState(false);

  const nodeRef = useRef(null);

  const handleClose = useCallback(() => {
    onClose();
    setContactError('');
    setName('');
    setContact('');
    setIsSended(false);
  });

  const onSend = useCallback(() => {
    if (contact === '') {
      setContactError('*это обязательное к заполнению поле');
    } else {
      setIsSended(true);
    }
  }, [contact]);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={300}
      classNames='modal'
      mountOnEnter
      unmountOnExit
    >
      <Modal ref={nodeRef} onClick={handleClose}>
        <div onClick={(e) => e.stopPropagation()}>
          {!isSended ? (
            <SendForm
              selectedList={selectedList}
              handleClose={handleClose}
              onSend={onSend}
              name={name}
              contact={contact}
              setName={setName}
              setContact={setContact}
              contactError={contactError}
            />
          ) : (
            <GratitudeForm
              handleClose={handleClose}
              selectedList={selectedList}
            />
          )}
        </div>
      </Modal>
    </CSSTransition>
  );
};
