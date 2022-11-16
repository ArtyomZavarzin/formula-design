import styled from 'styled-components';
import { Title } from '../styled-components/Titles';
import { ReactComponent as Line1 } from '../../assets/decorations/line1.svg';
import { ReactComponent as Line2 } from '../../assets/decorations/line2.svg';
import { ReactComponent as Line3 } from '../../assets/decorations/line3.svg';

const Line1Container = styled.div`
  pointer-events: none;
  position: absolute;
  top: 12px;
  right: 159px;
`;

const Line2Container = styled.div`
  pointer-events: none;
  position: absolute;
  top: 11px;
  right: 114px;
`;

const Line3Container = styled.div`
  pointer-events: none;
  position: absolute;
  top: 12px;
  right: 184px;
`;

const TextBlock = styled.div`
  transform: translateY(-10px);
  margin-bottom: 12px;
  margin-top: 14px;
  position: relative;

  &:last-child {
    margin-bottom: 0px;
  }
`;

const Text = styled.p`
  color: white;
  font-family: ${({ isSubtext }) =>
    isSubtext ? 'Playen Sans' : 'JetBrains Mono'};
  font-style: normal;
  font-weight: 400;
  text-align: end;
  font-size: ${({ fontSize = 16 }) => fontSize + 'px'};
  line-height: ${({ lineHeight = 21 }) => lineHeight + 'px'};
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const ContactSection = () => {
  return (
    <>
      <Title withPadding={true} isUppercase={true}>
        телефон
      </Title>
      <TextBlock>
        <Text>
          <ContactLink href='tel:+79039550077'>+7 (903) 955 00 77</ContactLink>
        </Text>
        <Text>
          <ContactLink href='tel:220077'>22 00 77</ContactLink>
        </Text>
      </TextBlock>

      <Title withPadding={true} isUppercase={true}>
        почта
      </Title>
      <TextBlock>
        <Line1Container>
          <Line1 />
        </Line1Container>
        <Text>
          <ContactLink href='mailto:cg.formula.studio@yandex.ru'>
            cg.formula.studio@yandex.ru
          </ContactLink>
        </Text>
        <Text fontSize={12} lineHeight={15} isSubtext={true}>
          для вопросов и сотрудничества
        </Text>
      </TextBlock>
      <TextBlock>
        <Line2Container>
          <Line2 />
        </Line2Container>
        <Text>
          <ContactLink href='mailto:cg.formula@yandex.ru'>
            cg.formula@yandex.ru
          </ContactLink>
        </Text>
        <Text fontSize={12} lineHeight={15} isSubtext={true}>
          для коммерческих лиц
        </Text>
      </TextBlock>

      <Title withPadding={true} isUppercase={true}>
        адрес
      </Title>
      <TextBlock>
        <Line3Container>
          <Line3 />
        </Line3Container>
        <Text>г. Томск, ул. Кузнецова 17</Text>
        <Text fontSize={12} lineHeight={15} isSubtext={true}>
          центральный вход «Дом со шпилем»
        </Text>
      </TextBlock>
    </>
  );
};
