import styled from 'styled-components';
import '../../App.css';
import { Title } from '../styled-components/Titles';
import { ReactComponent as CloseBtn } from '../../assets/icons/cross.svg';
import { RoundedInput } from '../styled-components/Inputs';
import { SendButton, ServiceButton } from '../styled-components/Buttons';
import { SwiperSlide, Swiper } from 'swiper/react';
import { FreeMode } from 'swiper';

const Block = styled.div`
  margin-bottom: 18px;
`;

const CloseBtnContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
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

const Wrapper = styled.div`
  margin-top: 8px;
  margin-left: -26px;
  margin-right: -26px;

  & .swiper-wrapper {
    & .swiper-slide {
      display: flex;
    }
    & .swiper-slide:first-child {
      padding-left: 26px;
    }
    & .swiper-slide:last-child {
      padding-right: 26px;
    }
  }
`;

const SpanRed = styled.span`
  font-family: 'Playen Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #ff0000;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  width: fit-content;
`;

export const SendForm = ({
  selectedList,
  handleClose,
  onSend,
  name,
  contact,
  setName,
  setContact,
  contactError,
}) => {
  return (
    <>
      <Block>
        <CloseBtnContainer>
          <Title withPadding={true} isUppercase={true} color='black'>
            ты выбрал
          </Title>
          <CloseBtn onClick={handleClose} />
        </CloseBtnContainer>
        <Wrapper>
          <Swiper
            slidesPerView={'auto'}
            freeMode={true}
            spaceBetween={8}
            modules={[FreeMode]}
            // className='selectedSwipper'
          >
            {selectedList.map((ser) => (
              <StyledSwiperSlide key={ser.id}>
                <ServiceButton
                  color={ser.color}
                  selected={true}
                  isGradient={ser.isGradient}
                >
                  {ser.title}
                </ServiceButton>
              </StyledSwiperSlide>
            ))}
          </Swiper>
        </Wrapper>
      </Block>

      <Block>
        <Title withPadding={true} isUppercase={true} color='black'>
          здесь твоё имя
        </Title>
        <RoundedInput
          placeholder='Как к тебе обращаться'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Block>

      <Block>
        <Title withPadding={true} isUppercase={true} color='black'>
          а тут контакты<SpanRed> *</SpanRed>
        </Title>
        <RoundedInput
          placeholder='Номер телефона или почта'
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <ErrorText>{contactError}</ErrorText>
      </Block>

      <SendButton
        onClick={onSend}
        colors={selectedList.reduce(
          (arr, el) =>
            el.isGradient ? [...arr, ...el.color] : [...arr, el.color],
          []
        )}
      >
        Отправить
      </SendButton>
      <Text>
        нажимая кнопку отправить, вы соглашаетесь
        <br />с{' '}
        <Link href='http://www.google.com' target='_blank' rel='noreferrer'>
          политикой конфиденциональности
        </Link>{' '}
        компании
      </Text>
    </>
  );
};
