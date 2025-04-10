'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

import { redirectedPathName } from '@/utils';
import { TranslationButtonProps } from './types';

export const TranslationSwitcher: React.FC<TranslationButtonProps> = ({
  lang,
  buttonText,
  className = '',
}) => {
  const pathName = usePathname();

  const btnClasses = classNames('link max-w-fit font-bold', className);

  return (
    <Link className={btnClasses} href={redirectedPathName(lang, pathName)}>
      {buttonText}
    </Link>
  );
};
