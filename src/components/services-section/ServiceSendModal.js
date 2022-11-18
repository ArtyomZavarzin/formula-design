import { useCallback, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import '../../App.css';
import { SendForm } from './SendForm';
import { GratitudeForm } from './GratitudeForm';
import axios from 'axios';

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
    transition: bottom 0.3s;
    bottom: calc(100vh - var(--vh, 1vh) * 100);
    max-height: 100vh;
    width: 100vw;
    position: absolute;
    background-color: white;
    padding: 24px 26px 18px 26px;
  }
`;

const chatId = '-1001844032971';
const token = '5814709849:AAGzC4LNaboxykfcvHgL8-I6PvBp0ryI-s0';
const apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

export const ServiceSendModal = ({ isOpen, onClose, selectedList }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [contactError, setContactError] = useState('');
  const [isSendError, setIsSendError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isSended, setIsSended] = useState(false);

  const nodeRef = useRef(null);

  const handleClose = useCallback(() => {
    onClose();
    setContactError('');
    setName('');
    setContact('');
    setIsSended(false);
    setIsSendError(false);
  });

  const onSend = useCallback(() => {
    if (contact === '') {
      setContactError('*это обязательное к заполнению поле');
    } else {
      const message = `У вас новая заявка!\n\nИмя: ${name}\nКонтакты: ${contact}\nВыбрано: ${selectedList
        .map((el) => el.title)
        .join(', ')}`;
      setIsLoading(true);
      axios
        .post(apiUrl, {
          chat_id: chatId,
          parse_mod: 'html',
          text: message,
        })
        .then(() => {
          setIsSended(true);
        })
        .catch((error) => {
          setIsSendError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [contact, name]);

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
              isSendError={isSendError}
              isLoading={isLoading}
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
