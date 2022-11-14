import styled from 'styled-components';
import { ServiceButton } from '../styled-components/Buttons';
import { Title } from '../styled-components/Titles';

const Container = styled.div`
  flex-grow: 1;
  margin-top: 12px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 12px 4px;
  flex-wrap: wrap;
`;

const Page = styled.div`
  min-height: 190px;
  padding-left: 26px;
  padding-right: 26px;
  display: flex;
  flex-direction: column;
`;

export const ServicePage = ({
  title,
  services,
  onServiceClick,
  selectedList,
}) => {
  return (
    <Page>
      <Title withPadding={true} isUppercase={true}>
        {title}
      </Title>
      <Container>
        {services.map((ser) => (
          <ServiceButton
            key={ser.id}
            color={ser.color}
            onClick={() => onServiceClick(ser)}
            selected={selectedList.some((el) => ser.id === el.id)}
            isGradient={ser.isGradient}
          >
            {ser.title}
          </ServiceButton>
        ))}
      </Container>
    </Page>
  );
};
