import styled from 'styled-components';
import { Text, Title } from '../styled-components/Titles';
import { slide } from './Styles';

const TextContainer = styled.div`
  /* margin: -36px -26px 0 -26px;
  padding: 36px 26px 46px 26px;
  height: calc(var(--vh, 1vh) * 100 - 45vh);
  overflow: auto; */
`;

const Blackout = styled.div`
  position: fixed;
  height: 90px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  pointer-events: none;
  background: linear-gradient(0deg, #1d1e1c 0%, rgba(29, 30, 28, 0) 100%);
`;

export const StudioSection = () => {
  return (
    <>
      <TextContainer>
        <Title withPadding={true} anim={slide} delay={0.1}>
          Привет, <br />
          &nbsp;это ФОРМУЛА
        </Title>
        <Text anim={slide} delay={0.2}>
          – команда дизайнеров и разработчиков из Сибири, создающих лучший
          визуальный и программный продукт для передовых компаний по всему миру.
        </Text>

        <Title withPadding={true} anim={slide} delay={0.2}>
          Наша команда
        </Title>
        <Text anim={slide} delay={0.3}>
          – синтез людей, идей, амбиций и целей:
          <br />
          создать, обучиться, популяризировать и повысить качество реализуемых
          визуальных и технических качеств продуктов.
        </Text>

        <Title withPadding={true} anim={slide} delay={0.3}>
          Наши проекты
        </Title>
        <Text anim={slide} delay={0.4}>
          – совокупность продуманных идей, современных решений и грамотной
          реализации.
        </Text>
        <Blackout />
      </TextContainer>
    </>
  );
};
