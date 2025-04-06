import { getDictionary, getMetadata } from '@/lib/dictionary';
// import { TRAITORS } from '@/data';
import type { Locale } from '@/i18n.config';

export default async function TraitorsPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  //   const {
  //     businessPage,
  //     common: { footer },
  //   } = await getDictionary(lang);

  //   const {
  //     hero,
  //     secondSection,
  //     helpfulSection,
  //     usefulWhom,
  //     ourManufactureSection,
  //     contactsSection,
  //     form,
  //   } = businessPage;
  //   const { contacts } = footer;

  return <div>TRAITORS PAGE</div>;
}
