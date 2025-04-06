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
    //   logoAriaLabelText: string;
    logoLeftText: string;
    logoRightText: string;
    forTraitorBtnText: string;
    languageButtonText: string;
    //   basketAriaLabel: string;
    //   basketTitle: string;
  };
  // dataOrder: IOrderModalStatic;
  // form: FormStaticDataT;
}
