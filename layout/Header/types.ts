import { NavLink } from '@/components/ui/NavLinks/types';

export interface HeaderProps {
  data: {
    sidePanelMenu: {
      openPanelBtnAriaText: string;
      closePanelBtnAriaText: string;
    };
    mobileMenu: {
      openMenuBtnAriaText: string;
      closeMenuBtnAriaText: string;
    };
    nav: NavLink[];
    toHomePage: NavLink;
    logoLeftText: string;
    logoRightText: string;
    forTraitorBtnText: string;
    languageButtonText: string;
  };
}
