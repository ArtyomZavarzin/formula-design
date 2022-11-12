import styled from 'styled-components';
import { Title } from '../styled-components/Titles';
import { ReactComponent as Line1 } from '../../assets/decorations/line1.svg';
import { ReactComponent as Line2 } from '../../assets/decorations/line2.svg';

const Line1Container = styled.div`
  pointer-events: none;
  position: absolute;
  top: 9px;
  right: 80px;
`;

const Line2Container = styled.div`
  pointer-events: none;
  position: absolute;
  top: 9px;
  right: 114px;
`;

const TextBlock = styled.div`
  transform: translateY(-10px);
  margin-bottom: 12px;
  position: relative;
`;

const Text = styled.p`
  color: white;
  font-family: 'Playen Sans';
  text-align: end;
  font-size: ${({ fontSize = 16 }) => fontSize + 'px'};
  line-height: ${({ lineHeight = 20 }) => lineHeight + 'px'};
`;

export const ContactSection = () => {
  return (
    <>
      <Title withPadding={true} isUppercase={true}>
        телефон
      </Title>
      <TextBlock>
        <Text>+7 (903) 955 00 77</Text>
        <Text>22 00 77</Text>
      </TextBlock>

      <Title withPadding={true} isUppercase={true}>
        почта
      </Title>
      <TextBlock>
        <Line1Container>
          <Line1 />
        </Line1Container>
        <Text>cg.formula.studio@yandex.ru</Text>
        <Text fontSize={12} lineHeight={15}>
          задать вопросы
        </Text>
      </TextBlock>
      <TextBlock>
        <Line2Container>
          <Line2 />
        </Line2Container>
        <Text>cg.formula@yandex.ru</Text>
        <Text fontSize={12} lineHeight={15}>
          для коммерческих лиц
        </Text>
      </TextBlock>

      <Title withPadding={true} isUppercase={true}>
        адрес
      </Title>
      <TextBlock>
        <Text>г. Томск, ул. Кузнецова 17</Text>
        <Text fontSize={12} lineHeight={15}>
          центральный вход «Дом со шпилем»
        </Text>
      </TextBlock>
    </>
  );
};
