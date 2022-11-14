import styled from 'styled-components';
import { Title } from '../styled-components/Titles';

const Text = styled.p`
  color: white;
  margin-top: 8px;
  margin-bottom: 24px;
`;

const TextContainer = styled.div`
  margin: -36px -26px 0 -26px;
  padding: 36px 26px 46px 26px;
  height: calc(100vh - 350px - 75px);
  overflow: auto;
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
        <Title withPadding={true}>
          Привет, <br />
          &nbsp;это ФОРМУЛА
        </Title>
        <Text>
          – команда дизайнеров и разработчиков из Сибири, создающих лучший
          визуальный и программный продукт для передовых компаний по всему миру.
        </Text>

        <Title withPadding={true}>Наша команда</Title>
        <Text>
          – синтез людей, идей, амбиций и целей:
          <br />
          создать, обучиться, популяризировать и повысить качество реализуемых
          визуальных и технических качеств продуктов.
        </Text>

        <Title withPadding={true}>Наши проекты</Title>
        <Text>
          – совокупность продуманных идей, современных решений и грамотной
          реализации.
        </Text>
        <Blackout />
      </TextContainer>
    </>
  );
};
