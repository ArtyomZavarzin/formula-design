import styled from 'styled-components';

const StyledBlock = styled.div`
  width: 100%;
  padding: 1px;
  border: 2px solid white;
  border-radius: 20px;
  transform: translateY(-50%);
  background-color: #1d1e1c;
  display: flex;
  margin-bottom: 20px;
  & div {
    user-select: none;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
    text-align: center;
    flex-grow: 1;
    color: white;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    font-size: 12px;
    transition: 0.15s;
  }
  & div.current {
    background-color: white;
    color: black;
  }
`;

export const SectionsButtons = ({
  sections,
  currentSection,
  setCurrentSection,
}) => {
  return (
    <StyledBlock>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`${currentSection === section.section ? 'current' : ''}`}
          onClick={() => setCurrentSection(section.section)}
        >
          {section.title}
        </div>
      ))}
    </StyledBlock>
  );
};
