import styled from 'styled-components';
import { Title } from '../styled-components/Titles';

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
  height: 190px;
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
            onClick={() => onServiceClick(ser.id)}
            className={selectedList[ser.id] ? 'selected' : ''}
          >
            {ser.title}
          </ServiceButton>
        ))}
      </Container>
    </Page>
  );
};
