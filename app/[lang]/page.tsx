import { HeroSection } from '@/sections/home/HeroSection';
import { NewsSection } from '@/sections/home/NewsSection';
import { AboutSection } from '@/sections/home/AboutSection';

import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/i18n.config';

export type HomeProps = {
  params: Promise<{
    lang: Locale; // 'uk' | 'ru'
  }>;
};

export default async function Home({ params }: HomeProps) {
  const { lang } = await params;

  const { homepage } = await getDictionary(lang);
  const { hero, about } = homepage;

  return (
    <>
      <HeroSection hero={hero} lang={lang} />
      <NewsSection lang={lang} isHomePage />
      <AboutSection about={about} />
    </>
  );
}
