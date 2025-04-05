'use client';
import { Logo } from "@/components/ui/Logo";

export interface HeaderProps {
    data: {
      sidePanelMenu: {
        openPanelBtnAriaText: string;
        closePanelBtnAriaText: string;
      };
    //   mobileMenu: {
    //     openMenuBtnAriaText: string;
    //     closeMenuBtnAriaText: string;
    //   };
    //   nav: NavLink[];
    //   toHomePage: NavLink;
    //   logoAriaLabelText: string;
      logoLeftText: string;
      logoRightText: string;
    //   forTraitorBtnText: string;
    //   languageButtonText: string;
    //   basketAriaLabel: string;
    //   basketTitle: string;
    };
    // dataOrder: IOrderModalStatic;
    // form: FormStaticDataT;
  }
  

export const Header:React.FC<HeaderProps> = ({data}) => {

    const {
        // sidePanelMenu,
        // nav,
        // mobileMenu,
        // toHomePage,
        // languageButtonText,
        // logoAriaLabelText,
        logoLeftText,
        logoRightText,
        // forTraitorBtnText,
      } = data;


  return (
    <header className="z-10 w-full bg-body pb-8 pt-9 xl:pb-10 smOnly:fixed smOnly:top-0">
        <Logo         
        logoLeftText={logoLeftText}
        logoRightText={logoRightText}
        position="header"
        className="xl:mb-[-60px]"/>
    </header>
  )
}

export default Header