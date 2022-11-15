import styled from 'styled-components';
import { SectionsButtons } from './SectionsButtons';
import { Sections, sectionsModel } from '../models/sections';
import { useState } from 'react';
import { LinkSection } from './links-section/LinkSection';
import { StudioSection } from './studio-section/StudioSection';
import { ContactSection } from './contact-section/ContactSection';
import { ServicesSection } from './services-section/ServicesSection';

const StyledWrapper = styled.div`
  border-top: 2px solid white;
  padding-left: 26px;
  padding-right: 26px;
  margin-top: -36px;
  flex-grow: 1;
  overflow: auto;
`;

const StyledContent = styled.div`
  margin: 0 -26px 0 -26px;
  padding: 36px 26px 46px 26px;
  height: 100%;
`;

const sectionComponents = {
  [Sections.LINKS]: <LinkSection />,
  [Sections.STUDIO]: <StudioSection />,
  [Sections.CONTACTS]: <ContactSection />,
  [Sections.SERVICES]: <ServicesSection />,
};

export const ContentBlock = () => {
  const [currentSection, setCurrentSection] = useState(Sections.LINKS);
  return (
    <>
      <SectionsButtons
        sections={sectionsModel}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <StyledWrapper>
        <StyledContent>{sectionComponents[currentSection]}</StyledContent>
      </StyledWrapper>
    </>
  );
};
