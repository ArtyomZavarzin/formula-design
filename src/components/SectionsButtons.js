import styled from 'styled-components';

const StyledBlock = styled.div`
  /* width: 100%; */
  margin: 0 26px;
  padding: 1px;
  border: 2px solid white;
  border-radius: 20px;
  transform: translateY(-50%);
  background-color: #1d1e1c;
  display: flex;
  justify-content: space-around;
  z-index: 15;
  position: relative;

  & div {
    user-select: none;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
    text-align: center;
    /* flex-grow: 1; */
    width: calc((100%) / 4);
    color: white;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    font-size: 12px;
    transition: 0.25s 0.15s;
  }
  & div.current {
    /* background-color: white; */
    color: black;
  }
  &::after {
    position: absolute;
    content: '';
    background-color: white;
    width: calc((100% - 2px) / 4);

    top: 1px;
    bottom: 1px;
    left: calc(
      1px + calc((100% - 2px) / 4) * ${({ currentIndex }) => currentIndex}
    );
    border-radius: 15px;
    transition: 0.25s;
    z-index: -1;
  }
`;

export const SectionsButtons = ({
  sections,
  currentSection,
  setCurrentSection,
}) => {
  return (
    <StyledBlock
      currentIndex={sections.findIndex((el) => el.section === currentSection)}
    >
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
