import { Title } from '../styled-components/Titles';
import { ReactComponent as CloseBtn } from '../../assets/icons/cross.svg';
import styled, { css } from 'styled-components';
import { LinkSection } from '../links-section/LinkSection';
import { HeartIcon } from './HeartIcon';

const CloseBtnContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;

const Text = styled.p`
  margin-top: 8px;
  margin-bottom: 14px;
  /* padding-left: 16px; */
`;

const HeartContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const GratitudeForm = ({ handleClose, selectedList }) => {
  return (
    <>
      <CloseBtnContainer>
        <Title isUppercase={true} color='black'>
          спасибо за заявку
        </Title>
        <CloseBtn onClick={handleClose} />
      </CloseBtnContainer>

      <Text>Мы свяжемся с тобой в ближайшее время</Text>
      <HeartContainer>
        <HeartIcon
          colors={selectedList.reduce(
            (arr, el) =>
              el.isGradient ? [...arr, ...el.color] : [...arr, el.color],
            []
          )}
        />
      </HeartContainer>

      <Title
        isUppercase={true}
        color='black'
        marginStyles={css`
          margin-bottom: 30px;
        `}
      >
        подписывайся на нас
      </Title>
      <LinkSection textColor='black' hideOrderLink={true} />
    </>
  );
};
