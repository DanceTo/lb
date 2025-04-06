import { getDictionary, getMetadata } from '@/lib/dictionary';
import { TRAITORS } from '@/data';
import type { Locale } from '@/i18n.config';

export type TraitorsPageProps = {
  params: Promise<{
    lang: Locale; // 'uk' | 'ru'
  }>;
};

export default async function TraitorsPage({ params }: TraitorsPageProps) {
  const { lang } = await params;

  return (
    <section className={`section pb-[48px] pt-0 xl:pb-[100px] `}>
      <div className="bg-green container mt-8 flex h-[800px] items-center justify-center border-2 border-indigo-600">
        <div>ТУТ БУДЕ ІНФА ПРО ЗРАДНИКІВ</div>
      </div>
    </section>
  );
}
