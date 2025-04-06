import { NEWS } from '@/data';
import { NewsSectionProps } from './types';
import { StaticCategoriesList } from '@/components/StaticCategoriesList/StaticCategoriesList';
import { getCommonDictionaries } from '@/lib/dictionary';

export const NewsSection: React.FC<NewsSectionProps> = async ({
  className = '',
  isHomePage = false,
  lang,
}) => {
  const {
    common: {
      catalog: {
        home_title,
        product_title,
        subtitle,
        categories: staticCategories,
        serviceError,
      },
    },
  } = await getCommonDictionaries(lang);

  return (
    <section
      id={NEWS}
      className={`section  ${
        !isHomePage
          ? 'pb-[48px] pt-0 xl:pb-[100px]'
          : 'md:pt-[76px] xl:pb-[50px] xl:pt-[15px]'
      } ${className}`}
    >
      <div className="container">
        <h2
          className={`section-title-primary ${
            !isHomePage ? 'mb-6 text-center xl:mb-10' : 'mb-2'
          }`}
        >
          {isHomePage ? home_title : product_title}
        </h2>

        {isHomePage && (
          <p className="mb-6 text-md font-medium text-black-light/25">
            {subtitle}
          </p>
        )}

        <StaticCategoriesList
          staticCategories={staticCategories}
          errorText={serviceError}
        />

        <div className="bg-green mt-8 flex h-[800px] items-center justify-center border-2 border-indigo-600">
          <div>ТУТ БУДУТЬ НОВИНИ</div>
        </div>
      </div>
    </section>
  );
};
