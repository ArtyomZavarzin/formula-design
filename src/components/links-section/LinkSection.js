import { Link } from './Link';
import { ReactComponent as CaseIcon } from '../../assets/icons/case-link-icon.svg';
import { ReactComponent as InstIcon } from '../../assets/icons/inst-link-icon.svg';
import { ReactComponent as TgIcon } from '../../assets/icons/tg-link-icon.svg';

export const LinkSection = () => {
  return (
    <>
      <Link title='кейсы' icon={<CaseIcon />} />
      <Link
        title='инста'
        subtitle='рекомендуем включить VPN'
        icon={<InstIcon />}
        link={'https://www.instagram.com/cg.formula/'}
      />
      <Link title='телега' icon={<TgIcon />} />
      <Link title='заказать проект' subtitle='через freelance.ru' />
    </>
  );
};
