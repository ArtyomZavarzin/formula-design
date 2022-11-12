import styled from 'styled-components';
import { Title } from '../styled-components/Titles';

const Text = styled.p`
  color: white;
  margin-top: 8px;
  margin-bottom: 24px;
`;

export const StudioSection = () => {
  return (
    <>
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
    </>
  );
};
