'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import classNames from 'classnames';
import { Locale } from '@/i18n.config';

import LogoSvg from '@/public/icons/icon_lev.svg';
import { LogoProps } from './types';


export const Logo:React.FC<LogoProps> = ({
    position = 'header',
    className = '',
    logoRightText = '',
    logoLeftText = '',
    
}) => {

    const lang = useParams().lang as Locale;
    const logoSvgStyles = classNames('h-[51px] w-[87px]', {
        'xl:w-[116px] xl:h-[64px]': position === 'header',
        'md:w-[116px] md:h-[64px]': position === 'footer' || 'contacts',
      });
      const logoTextStyles = classNames({
        'container mb-4 flex max-w-fit items-center justify-center font-bold text-red2 xl:text-7xl':
          position === 'header',
      });

  return (
    <Link
    href={`/${lang}`}
    className={`common-transition block max-w-max text-black-light hover:text-red focus:text-red ${className} ${logoTextStyles}`}    
  >
    <span className={`uppercase ${position !== 'header' && 'hidden'}`}>
      {logoLeftText}
    </span>
    <LogoSvg width={116} height={64} className={logoSvgStyles} />
    <span className={`uppercase ${position !== 'header' && 'hidden'}`}>
      {logoRightText}
    </span>
  </Link>
  )
}
