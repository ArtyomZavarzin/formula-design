import { useCallback, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import '../../App.css';
import { Title } from '../styled-components/Titles';
import { ReactComponent as CloseBtn } from '../../assets/icons/cross.svg';
import { RoundedInput } from '../styled-components/Inputs';

const Modal = styled.div`
  position: fixed;
  z-index: 50;
  height: 100vh;
  width: 100vw;
  background-color: #74747436;
  color: black;
  top: 0;
  left: 0;
  overflow-y: hidden;
  & > div {
    overflow: scroll;
    bottom: 0;
    max-height: 100vh;
    width: 100vw;
    position: absolute;
    background-color: white;
    padding: 24px 26px 18px 26px;
  }
`;

const ListContainer = styled.div`
  flex-grow: 1;
  margin-top: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 12px 4px;
  flex-wrap: wrap;
`;

const ServiceButton = styled.span`
  border: ${({ color }) => '1px solid ' + color};
  color: white;
  line-height: 40px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 108px;
  transition: 0.15s;
  &.selected {
    background-color: ${({ color }) => color};
  }
`;

const Block = styled.div`
  margin-bottom: 18px;
`;

const CloseBtnContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;

const SendButton = styled.button`
  outline: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  width: 100%;
  background: linear-gradient(90deg, #ef4141 0%, #c241ef 52.08%, #6b41ef 100%);
  border-radius: 77px;
  font-family: 'Ultramono Wide Black';
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 42px;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
  border: none;

  transition: all 0.3s;
`;

const Text = styled.p`
  margin-top: 6px;
  font-family: 'Playen Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #1d1e1c;
`;

const ErrorText = styled.p`
  margin-top: 6px;
  font-size: 10px;
  line-height: 12px;

  color: #ff0000;
`;

const Link = styled.a`
  color: #004efc;
  text-decoration: none;
`;

export const ServiceSendModal = ({ isOpen, onClose, selectedList }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [contactError, setContactError] = useState('');

  const nodeRef = useRef(null);

  const handleClose = useCallback(() => {
    onClose();
    setContactError('');
    setName('');
    setContact('');
  });

  const onSend = useCallback(() => {
    if (contact === '') {
      setContactError('*это обязательное к заполнению поле');
    } else {
      handleClose();
    }
  }, [contact, handleClose]);

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
          <Block>
            <CloseBtnContainer>
              <Title withPadding={true} isUppercase={true} color='black'>
                вы выбрали
              </Title>
              <CloseBtn onClick={handleClose} />
            </CloseBtnContainer>

            <ListContainer>
              {selectedList.map((ser) => (
                <ServiceButton
                  key={ser.id}
                  color={ser.color}
                  className={
                    selectedList.some((el) => ser.id === el.id)
                      ? 'selected'
                      : ''
                  }
                >
                  {ser.title}
                </ServiceButton>
              ))}
            </ListContainer>
          </Block>

          <Block>
            <Title withPadding={true} isUppercase={true} color='black'>
              теперь скажите, как вас зовут
            </Title>
            <RoundedInput
              placeholder='Ваше имя'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Block>

          <Block>
            <Title withPadding={true} isUppercase={true} color='black'>
              как нам с вами связаться
            </Title>
            <RoundedInput
              placeholder='Номер телефона или почта'
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <ErrorText>{contactError}</ErrorText>
          </Block>

          <SendButton onClick={onSend}>Отправить</SendButton>
          <Text>
            нажимая кнопку отправить, вы соглашаетесь
            <br />с{' '}
            <Link href='http://www.google.com' target='_blank' rel='noreferrer'>
              политикой конфиденциональности
            </Link>{' '}
            компании
          </Text>
        </div>
      </Modal>
    </CSSTransition>
  );
};
