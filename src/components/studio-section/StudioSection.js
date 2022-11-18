import styled from 'styled-components';
import { Text, Title } from '../styled-components/Titles';
import { animation, slide, slide2 } from './Styles';
import { ReactComponent as Icon1 } from '../../assets/text-icons/icon1.svg';
import { ReactComponent as Icon2 } from '../../assets/text-icons/icon2.svg';
import { ReactComponent as Icon3 } from '../../assets/text-icons/icon3.svg';
import { ReactComponent as Icon4 } from '../../assets/text-icons/icon4.svg';
import { ReactComponent as Icon5 } from '../../assets/text-icons/icon5.svg';
import { ReactComponent as Icon6 } from '../../assets/text-icons/icon6.svg';
import { ReactComponent as Icon7 } from '../../assets/text-icons/icon7.svg';
import { ReactComponent as Icon8 } from '../../assets/text-icons/icon8.svg';

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

const IconWrapper = styled.span`
  white-space: nowrap;
  & svg {
    vertical-align: middle;
    ${({ delay }) => animation(slide2, delay)}
  }
`;

export const StudioSection = () => {
  return (
    <>
      <TextContainer>
        <Title withPadding={true} anim={slide} delay={0.1}>
          Наша студия
        </Title>
        <Text
          style={{ textIndent: '16px' }}
          fontFamily='Playen Sans'
          anim={slide2}
          delay={0.2}
        >
          {'  '}
          команда{' '}
          <IconWrapper delay={0.45}>
            <Icon1 /> дизайнеров
          </IconWrapper>{' '}
          и <span style={{ color: '#EF6B41' }}>&lt;</span>
          разработчиков<span style={{ color: '#EF6B41' }}>/&gt;</span> из
          Сибири, создающих лучший визуальный и
          <IconWrapper delay={0.5}>
            <Icon2 /> программный
          </IconWrapper>{' '}
          продукт для передовых компаний по всему{' '}
          <IconWrapper delay={0.55}>
            миру <Icon3 />
          </IconWrapper>
        </Text>

        <Title withPadding={true} anim={slide} delay={0.2}>
          Наша команда
        </Title>
        <Text
          style={{ textIndent: '16px' }}
          fontFamily='Playen Sans'
          anim={slide2}
          delay={0.3}
        >
          <span
            style={{
              padding: '0 3px',
              background:
                'linear-gradient(90deg, #EF4141 0%, #C241EF 52.08%, #6B41EF 100%)',
            }}
          >
            синтез
          </span>{' '}
          людей, идей, амбиций и{' '}
          <IconWrapper delay={0.6}>
            <Icon4 /> целей:
          </IconWrapper>
          <br />
          создать, популяризировать и повысить качество реализуемых{' '}
          <IconWrapper delay={0.65}>
            <Icon5 /> визуальных
          </IconWrapper>{' '}
          и технических характеристик продуктов.
        </Text>

        <Title withPadding={true} anim={slide} delay={0.3}>
          Наши проекты
        </Title>
        <Text
          style={{ textIndent: '16px' }}
          fontFamily='Playen Sans'
          anim={slide2}
          delay={0.4}
        >
          совокупность продуманных{' '}
          <IconWrapper delay={0.7}>
            <Icon6 /> идей,
          </IconWrapper>{' '}
          современных{' '}
          <IconWrapper delay={0.75}>
            <Icon7 /> решений
          </IconWrapper>{' '}
          и грамотной{' '}
          <IconWrapper delay={0.8}>
            <Icon8 /> реализации
          </IconWrapper>{' '}
          <span style={{ textDecoration: 'underline' }}>
            в каждом нашем проекте
          </span>
          .
        </Text>
        <Blackout />
      </TextContainer>
    </>
  );
};
