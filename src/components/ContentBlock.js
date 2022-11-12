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
    <StyledWrapper>
      <SectionsButtons
        sections={sectionsModel}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      {sectionComponents[currentSection]}
    </StyledWrapper>
  );
};
