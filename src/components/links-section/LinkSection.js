import { Link } from './Link';
import { ReactComponent as CaseIcon } from '../../assets/icons/case-link-icon.svg';
import { ReactComponent as InstIcon } from '../../assets/icons/inst-link-icon.svg';
import { ReactComponent as TgIcon } from '../../assets/icons/tg-link-icon.svg';

export const LinkSection = ({
  textColor = 'white',
  hideOrderLink = false,
  animated = false,
}) => {
  return (
    <>
      <Link
        title='кейсы'
        icon={<CaseIcon />}
        link={'https://www.behance.net/formuladesign1'}
        textColor={textColor}
        from={animated && 'right'}
        delay={0}
      />
      <Link
        title='инста'
        subtitle='рекомендуем включить VPN'
        icon={<InstIcon />}
        link={'https://www.instagram.com/cg.formula/'}
        textColor={textColor}
        from={animated && 'left'}
        delay={0.1}
      />
      <Link
        title='телега'
        icon={<TgIcon />}
        link={'https://t.me/cgformula'}
        textColor={textColor}
        from={animated && 'right'}
        delay={0.2}
      />
      {!hideOrderLink && (
        <Link
          title='заказать проект'
          subtitle='через freelance.ru'
          link={'https://freelance.ru/cgformula'}
          textColor={textColor}
          from={animated && 'left'}
          delay={0.3}
        />
      )}
    </>
  );
};
