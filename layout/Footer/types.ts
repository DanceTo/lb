import { InfoData } from '@/types/Info';

export type FooterProps = {
  footer: {
    contacts: {
      href: string;
      icon: string;
      text: string;
    }[];
    nav_text: string;
    nav: {
      name: string;
      href?: string;
    }[];
    forTraitorBtnText: string;
    social_text: string;
    social: {
      href: string;
      icon: string;
      text: string;
    }[];
  };
  information: {
    title: string;
    buttons: {
      id: string;
      text: string;
      data: string;
    }[];
    className?: string;
  };
};
