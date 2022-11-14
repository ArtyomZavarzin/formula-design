import { Link } from './Link';
import { ReactComponent as CaseIcon } from '../../assets/icons/case-link-icon.svg';
import { ReactComponent as InstIcon } from '../../assets/icons/inst-link-icon.svg';
import { ReactComponent as TgIcon } from '../../assets/icons/tg-link-icon.svg';

export const LinkSection = ({ textColor = 'white', hideOrderLink = false }) => {
  return (
    <>
      <Link
        title='кейсы'
        icon={<CaseIcon />}
        link={'https://www.behance.net/formuladesign1'}
        textColor={textColor}
      />
      <Link
        title='инста'
        subtitle='рекомендуем включить VPN'
        icon={<InstIcon />}
        link={'https://www.instagram.com/cg.formula/'}
        textColor={textColor}
      />
      <Link
        title='телега'
        icon={<TgIcon />}
        link={'https://t.me/cgformula'}
        textColor={textColor}
      />
      {!hideOrderLink && (
        <Link
          title='заказать проект'
          subtitle='через freelance.ru'
          link={'https://freelance.ru/cgformula'}
          textColor={textColor}
        />
      )}
    </>
  );
};
